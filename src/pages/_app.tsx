// src/pages/_app.tsx
import { clientSchema } from '@/env/schema.mjs';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { wsLink, createWSClient } from '@trpc/client/links/wsLink';
import { withTRPC } from '@trpc/next';
import type { AppType } from 'next/dist/shared/lib/utils';
import superjson from 'superjson';
import type { AppRouter } from '../server/router';
import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `https://0.0.0.0:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

const url = `${getBaseUrl()}/api/trpc`;

const getEndingLink = () => {
  if (typeof window === 'undefined') {
    return httpBatchLink({ url });
  }

  const wsUrl =
    process.env.NEXT_PUBLIC_WS_URL ||
    `wss://0.0.0.0:${process.env.NEXT_WS_PORT || 3001}`;
  const client = createWSClient({
    url: wsUrl,
  });

  console.log(wsUrl);

  return wsLink({ client });
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      links: [getEndingLink()],
      transformer: superjson,
      header() {
        if (ctx?.req) {
          return { ...ctx.req.headers };
        }

        return {};
      },
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
