import MyResponsivePie, { data } from "@/components/Chart";

const Chart = () => {
  return (
    <div className="h-screen m-4">
      <MyResponsivePie data={data} />
    </div>
  );
};
export default Chart;
