import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import dynamic from "next/dynamic";
import { ChartData } from "@/components/Chart";
import { Button } from "@/components/Button";

const Chart = dynamic(() => import("@/components/Chart"), {
  ssr: false,
});

const FPSMeter = dynamic(() => import("@/components/FPSMeter"), {
  ssr: false,
});

const Home: NextPage = () => {
  const { mutateAsync: sendDataMutation } = trpc.useMutation([
    "data.send-data",
  ]);

  const [drawChart, setDrawChart] = useState(true);
  const [data, setData] = useState<ChartData>([]);
  const [canFetch, setFetchAbility] = useState(true);

  trpc.useSubscription(["data.onSendData"], {
    onNext: (res) => {
      const value = Number(res);
      const MAX_POINTS = 100;
      if (Number.isFinite(value)) {
        setData((data) => {
          const nextData = data.concat({
            x: data.length,
            y: value,
          });

          if (nextData.length <= MAX_POINTS) return nextData;

          return nextData.slice(-1 * MAX_POINTS).map((value) => ({
            x: value.x - 1,
            y: value.y,
          }));
        });
      } else {
        setFetchAbility(true);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Realtime Graph Demo</title>
        <meta
          name="description"
          content="Demo chart with realtime updates built on t3 stack w/ websockets and react-vs"
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl md:text-[3rem] leading-normal font-extrabold text-gray-700 font-quicksand">
          Demo chart with realtime updates w/ websockets
        </h1>

        <Chart data={data} />

        <Button
          disabled={!canFetch}
          className="my-4"
          onClick={() => {
            sendDataMutation({ sendData: true, step: 0.3, range: [0, 10] });
            setDrawChart(true);
            setFetchAbility(false);
          }}
        >
          Fetch Data
        </Button>

        <FPSMeter />
      </main>
    </>
  );
};

export default Home;
