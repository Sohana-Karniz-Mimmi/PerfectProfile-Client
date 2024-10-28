import {
  BarChart,
  Bar,
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
      totalUse: 65,
      totalUser: 35,
    },
    {
      name: "Template 2",
      totalUse: 150,
      totalUser: 80,
    },
    {
      name: "Template 3",
      totalUse: 100,
      totalUser: 70,
    },
    {
      name: "Template 4",
      totalUse: 65,
      totalUser: 35,
    },
    {
      name: "Template 5",
      totalUse: 135,
      totalUser: 70,
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
    {
      name: "Template 5",
      totalUse: 135,
      totalUser: 70,
    },
  ];


  const renderLegend = () => (
    <div style={{ display: "flex", justifyContent: "center", gap: 15 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <span
          style={{
            width: 12,
            height: 12,
            backgroundColor: "#2CACD5",
            display: "inline-block",
            borderRadius: 3, // Small rounding for a square shape
          }}
        ></span>
        <span style={{ color: "#2CACD5", fontWeight: "medium" }}>totalUse</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <span
          style={{
            width: 12,
            height: 12,
            backgroundColor: "#00C8AA",
            display: "inline-block",
            borderRadius: 3,
          }}
        ></span>
        <span style={{ color: "#00C8AA", fontWeight: "medium" }}>totalUser</span>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full overflow-x-auto font-montserrat">
      <h2 className="text-2xl font-bold pb-10 font-lora">Most Used Template</h2>
      <div className="min-w-[500px] w-full lg:w-[100%]">
        <ResponsiveContainer width="100%" height={450}>
          <BarChart
            width={700}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 50,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis
              dataKey="name"
              interval={0}
              tick={{ angle: 0, fontSize: 12, textAnchor: "end" }}
            />
            <YAxis /> */}
            <XAxis
              dataKey="name"
              interval={0}
              tick={{ angle: 0, fontSize: 12, textAnchor: "end", fill: "#2CACD5" }} // Custom color for X-axis labels
            />
            <Tooltip />
            {/* <Legend /> */}
            <Legend content={renderLegend} />
            <Bar dataKey="totalUse" fill="#2CACD5" radius={[10, 10, 0, 0]}  barSize={27} />
            <Bar dataKey="totalUser" fill="#E3E4E6 " barSize={25} />
            {/* #E3E4E6 */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HeadingChart;
