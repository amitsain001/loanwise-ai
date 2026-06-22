import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TimelineChart = ({
  schedule,
}) => {

  const data =
    schedule.filter(
      (_, index) =>
        index % 12 === 0
    );

  return (
    <div
      className="
      glass
      rounded-3xl
      p-6
      h-[350px]
      "
    >
      <h3
        className="
        text-2xl
        font-bold
        mb-6
        "
      >
        Outstanding Balance
      </h3>

      <ResponsiveContainer>
        <LineChart
          data={data}
        >
          <XAxis
            dataKey="month"
          />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#06b6d4"
            strokeWidth={4}
            dot={false}
           />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimelineChart;