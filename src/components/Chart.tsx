import {
  XYPlot,
  YAxis,
  AreaSeries,
  VerticalGridLines,
  HorizontalGridLines,
  GradientDefs,
  YAxisProps,
} from 'react-vis';
import 'react-vis/dist/style.css';

export type ChartData = { x: number; y: number }[];
const Chart: React.FC<{ data: ChartData }> = ({ data }) => {
  return (
    <div className='rounded-lg' style={{ background: '#7e58ed' }}>
      <XYPlot
        height={500}
        width={1200}
        yDomain={[0, 10]}
        xDomain={[0, 99]}
        margin={30}
      >
        <VerticalGridLines
          style={{ strokeDasharray: '3 3', strokeWidth: 2, stroke: '#361066' }}
        />
        <HorizontalGridLines
          style={{
            strokeDasharray: '2 3',
            strokeWidth: 3,
            stroke: '#361066',
          }}
        />
        <AreaSeries
          fill='#551eba'
          stroke='#361066'
          data={data}
          curve={'curveCardinal'}
        />
        <YAxis
          hideLine
          left={-15}
          tickSizeOuter={25}
          tickFormat={myFormatter}
          style={{ stroke: 'transparent' }}
        />
      </XYPlot>
    </div>
  );
};

export default Chart;

// Typings according to react-vis ¯\_(ツ)_/¯
function myFormatter(t: string): any {
  return (
    <text
      fill='#cad5f9'
      strokeWidth={2}
      stroke='#361066'
      style={{ paintOrder: 'stroke' }}
      className='text-lg font-normal font-mono'
    >
      {t}
    </text>
  );
}
