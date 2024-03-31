import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.scss"

const Chart = ({ aspect, title }) => {
  const monthlyEarningsData = [
    { month: "January", Total: 10000 },
    { month: "February", Total: 15000 },
    { month: "March", Total: 20000 },
    { month: "April", Total: 18000 },
    { month: "May", Total: 22000 },
    { month: "June", Total: 25000 },
    { month: "July", Total: 30000 },
    { month: "August", Total: 28000 },
    { month: "September", Total: 32000 },
    { month: "October", Total: 35000 },
    { month: "November", Total: 38000 },
    { month: "December", Total: 40000 },
  ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={monthlyEarningsData} // Use the static data
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3e3efb" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3e3efb" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#3e3efb"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
