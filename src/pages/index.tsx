import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import dynamic from "next/dynamic";
import { ChartData } from "@/components/Chart";

const Chart = dynamic(() => import("@/components/Chart"), {
  ssr: false,
});

const Home: NextPage = () => {
  const { mutateAsync: sendDataMutation } = trpc.useMutation([
    "data.send-data",
  ]);

  const [drawChart, setDrawChart] = useState(true);
  const [data, setData] = useState<ChartData>([]);

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
      }
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

        <Chart data={data} />

        <button
          onClick={() => {
            // @TODO: Add form controls.
            sendDataMutation({ sendData: true, step: 0.3, range: [0, 10] });
            setDrawChart(true);
          }}
        >
          Set WS connection
        </button>
      </main>
    </>
  );
};

export default Home;
