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
    <div className="w-full h-full overflow-x-auto  font-montserrat">
      <h2 className="text-2xl font-bold pb-10 font-lora">Most Used Template</h2>
      <div className="min-w-[1080px] w-full lg:w-[100%]">
        {" "}
        {/* Ensure a minimum width for the chart */}
        <ResponsiveContainer width="100%" height={600}>
          <BarChart
            width={1000} // Still large enough to accommodate all labels
            height={600}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 50, // Extra space for rotated X-axis labels
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              interval={0} // Show all labels
              tick={{ angle: 0, fontSize: 12, textAnchor: "end" }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            
              <Bar dataKey="totalUse" fill="#8884d8" />
              <Bar dataKey="totalUser" fill="#82ca9d" />
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HeadingChart;
