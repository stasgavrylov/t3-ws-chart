import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import dynamic from 'next/dynamic';
import { ChartData } from '@/components/Chart';
import { Button } from '@/components/Button/Button';
import { RangeInput } from '@/components/RangeInput/RangeInput';

const Chart = dynamic(() => import('@/components/Chart'), {
  ssr: false,
});

const FPSMeter = dynamic(() => import('@/components/FPSMeter'), {
  ssr: false,
});

const Home: NextPage = () => {
  const { mutateAsync: sendDataMutation } = trpc.useMutation([
    'data.send-data',
  ]);

  const [data, setData] = useState<ChartData>([]);
  const [range, setRange] = useState<number>(100);

  const [canFetch, setFetchAbility] = useState(true);

  trpc.useSubscription(['data.onSendData'], {
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
          name='description'
          content='Demo chart with realtime updates built on t3 stack with websockets and react-vis'
        />
        <link rel='icon' href='/favicon.ico' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className='container mx-auto flex flex-col items-center justify-center min-h-screen p-4'>
        <h1 className='text-3xl leading-normal font-extrabold text-gray-700 font-quicksand'>
          Demo chart w/ realtime websocket updates
        </h1>
        <p className='mb-2 text-lg leading-normal font-extrabold text-gray-500 font-quicksand'>
          On button press server will push {range} data points with 60 RPS
          frequency
        </p>

        <div style={{ height: 400 }}>
          <Chart data={data} />
        </div>

        <label className='flex flex-row items-center font-quicksand my-4'>
          <span>50</span>
          <RangeInput
            min={50}
            max={500}
            value={range}
            step={1}
            onChange={setRange}
            className='mx-2'
          />
          <span>500</span>
        </label>

        <Button
          className='mb-4'
          disabled={!canFetch}
          onClick={() => {
            sendDataMutation({ sendData: true, amount: range });
            setFetchAbility(false);
          }}
        >
          Fetch Data
        </Button>

        <div className='h-8'>
          <FPSMeter />
        </div>
        <a
          href='https://github.com/stasgavrylov/t3-ws-chart'
          target='_blank'
          title='Project Repository'
          className='flex items-center fixed top-3 right-3 font-medium'
        >
          <img className='h-5 mr-2' src='/github.png' alt='GitHub logo' />
          @stasgavrylov
        </a>
      </main>
    </>
  );
};

export default Home;
