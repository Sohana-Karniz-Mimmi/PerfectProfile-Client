import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const HeadingChart = () => {
  const data = [
    {
      name: "Template 1",
      totalUse: 215,
      totalUser: 210,
    },
    {
      name: "Template 2",
      totalUse: 199,
      totalUser: 181,
    },
    {
      name: "Template 3",
      totalUse: 174,
      totalUser: 152,
    },
    {
      name: "Template 4",
      totalUse: 150,
      totalUser: 120,
    },
    {
      name: "Template 5",
      totalUse: 5,
      totalUser: 5,
    },
    {
      name: "Template 6",
      totalUse: 120,
      totalUser: 40,
    },
    {
      name: "Template 7",
      totalUse: 85,
      totalUser: 20,
    },
  ];

  return (
    <div className="max-w-[100%] w-full h-[60vh] ">
      <h2 className="text-2xl font-bold pb-10 font-lora">Most Used Template</h2>
      <ResponsiveContainer width="100%" height="100%" className="pb-16">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalUse"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="totalUser"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeadingChart;
