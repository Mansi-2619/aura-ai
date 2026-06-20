import Link from "next/link";
<div className="flex gap-6 mb-10">
  <Link href="/">Home</Link>
  <Link href="/dashboard">Dashboard</Link>
  <Link href="/contract-analyzer">Analyzer</Link>
</div>
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", followers: 1200 },
  { month: "Feb", followers: 1800 },
  { month: "Mar", followers: 2500 },
  { month: "Apr", followers: 3800 },
  { month: "May", followers: 5200 },
];

export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10">
        Creator Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-4 mb-10">
        <div className="border p-6 rounded-xl">
          <h3>Health Score</h3>
          <p className="text-3xl font-bold">87</p>
        </div>

        <div className="border p-6 rounded-xl">
          <h3>Burnout Risk</h3>
          <p className="text-3xl font-bold">Low</p>
        </div>

        <div className="border p-6 rounded-xl">
          <h3>Revenue Forecast</h3>
          <p className="text-3xl font-bold">₹52K</p>
        </div>

        <div className="border p-6 rounded-xl">
          <h3>Credit Score</h3>
          <p className="text-3xl font-bold">820</p>
        </div>
      </div>

      <div className="border rounded-xl p-6 h-[400px]">
        <h2 className="mb-6 text-xl font-semibold">
          Follower Growth
        </h2>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="followers"
              stroke="#8b5cf6"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}