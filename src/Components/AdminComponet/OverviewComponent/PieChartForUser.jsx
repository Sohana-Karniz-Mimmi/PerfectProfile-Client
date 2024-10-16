import { useSelector } from "react-redux";
import { selectAllUsersState } from "../../../store/Features/user/userSlice";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";

const PieChartForUser = () => {
  const users = useSelector(selectAllUsersState);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  console.log(users);

  // Count the occurrences of each productName
  const userCounts = users?.reduce(
    (acc, user) => {
      acc[user?.productName] = (acc[user?.productName] || 0) + 1;
      return acc;
    },
    { standard: 0, free: 0, premium: 0 }
  );

  //   Convert the userCounts into an array for Recharts
  const pieData = [
    { name: "Standard", value: userCounts?.standard },
    { name: "Free", value: userCounts?.free },
    { name: "Premium", value: userCounts?.premium },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  

  // Update window width when resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Set outerRadius dynamically based on window width
  const getOuterRadius = () => (windowWidth < 768 ? 100 : 150);

  return (
    <div className="max-w-full w-full h-[70vh] px-2">
      <h2 className="text-2xl font-bold  font-lora">
        Overview of our Different type of user
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={600}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={getOuterRadius()}
            fill="#8884d8"
            dataKey="value"
          >
            {users?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={90} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartForUser;
