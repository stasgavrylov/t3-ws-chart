import { XYPlot, XAxis, AreaSeries } from "react-vis";
import "react-vis/dist/style.css";

export type ChartData = { x: number; y: number }[];
const Chart = ({ data }: { data: ChartData }) => {
  return (
    <XYPlot height={300} width={1200} yDomain={[0, 10]}>
      <AreaSeries data={data} curve={"curveCardinal"} />
      <XAxis />
    </XYPlot>
  );
};

export default Chart;
