import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  const { mutateAsync: sendDataMutation } = trpc.useMutation([
    "data.send-data",
  ]);

  trpc.useSubscription(["data.onSendData"], {
    onNext: (value) => {
      console.log({ value });
    },
  });

  return (
    <>
      <Head>
        <title>Performant Graph Project</title>
        <meta
          name="description"
          content="Demo app built on t3 stack w/ websockets"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Check this out
        </h1>
        <button
          onClick={() => {
            // @TODO: Add form controls.
            sendDataMutation({ sendData: true, step: 0.3, range: [0, 10] });
          }}
        >
          Set WS connection
        </button>
      </main>
    </>
  );
};

export default Home;
