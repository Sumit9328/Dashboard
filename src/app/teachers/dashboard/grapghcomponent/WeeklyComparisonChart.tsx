import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "17 Sun", thisWeek: 80000, lastWeek: 60000 },
  { name: "18 Mon", thisWeek: 40000, lastWeek: 50000 },
  { name: "19 Tue", thisWeek: 30000, lastWeek: 60000 },
  { name: "20 Wed", thisWeek: 60000, lastWeek: 55000 },
  { name: "21 Thu", thisWeek: 70000, lastWeek: 50000 },
  { name: "22 Fri", thisWeek: 75000, lastWeek: 40000 },
  { name: "23 Sat", thisWeek: 50000, lastWeek: 60000 },
];

const WeeklyComparisonChart = () => {
  return (
    <BarChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 20,
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
      <Bar dataKey="thisWeek" fill="#2C3E50" />
      <Bar dataKey="lastWeek" fill="#F9A8D4" />
    </BarChart>
  );
};

export default WeeklyComparisonChart;
