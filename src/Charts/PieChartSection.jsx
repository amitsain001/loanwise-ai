import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, } from "recharts";

const COLORS = [
  "#06b6d4",
  "#8b5cf6",
];

const PieChartSection = ({
  principal,
  interest,
}) => {

  const data = [
    {
      name: "Principal",
      value: principal,
    },
    {
      name: "Interest",
      value: interest,
    },
  ];

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
        Principal vs Interest
      </h3>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="42%"
            innerRadius={50}
            outerRadius={90}
            paddingAngle={3}
            label={({ percent }) =>
                `${(percent * 100).toFixed(0)}%`
            }
            >
            {data.map((_, index) => (
                <Cell
                key={index}
                fill={COLORS[index]}
                />
            ))}
           </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartSection;