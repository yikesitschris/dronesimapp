import { BarChart } from "@mantine/charts";

const Histogram = ({ detectionsHistory }) => {
  return (
    <BarChart
      h={300}
      data={detectionsHistory || []}
      dataKey="drone_id"
      yAxisProps={{ domain: [-120, 0] }}
      series={[{ name: "rssi", color: "blue" }]}
      barProps={{ radius: 10 }}
    />
  );
};

export default Histogram;
