import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
// import { RechartsDevtools } from "@recharts/devtools";
import { useSelector } from "react-redux";

const index = () => {
  const data = useSelector((state) => state.data);

  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 25,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
      <Bar dataKey="uv" fill="#82ca9d" />
      {/* <RechartsDevtools /> */}
    </BarChart>
  );
};

export default index;
