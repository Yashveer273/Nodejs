import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

// here i define chart 2

const Chart_overview1 = () => {
  const Data3 = [
    { name: "Geeksforgeeks", students: 130 },
    { name: "Technical scripter", students: 123 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 410 },
    { name: "Geeksforgeeks", students: 250 },
    { name: "Technical scripter", students: 250 },
    { name: "Geek-i-knack", students: 123 },
    { name: "Geek-o-mania", students: 110 },
    { name: "Geeksforgeeks", students: 125 },
    { name: "Technical scripter", students: 142 },
    { name: "Geek-i-knack", students: 180 },
    { name: "Geek-o-mania", students: 173 },
    { name: "Geeksforgeeks", students: 250 },
    { name: "Technical scripter", students: 95 },
    { name: "Geek-i-knack", students: 110 },
    { name: "Geek-o-mania", students: 115 },
  ];
  const width = 500;
  const height = 300;
  return (
    <div>
      <style>
        {`
          .recharts-surface {
            border-radius: 14px;
            overflow: hidden;
            // padding-top:100px;
          }
        `}
      </style >
      <div style={{paddingTop:"100px"}} >

  
      <ResponsiveContainer width={"96%"} height={"70%"} aspect={width / height} >
        <AreaChart data={Data3} width={30} height={30}>
          <CartesianGrid
            stroke="#000000"
            strokeWidth=".006rem"
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="name" />

          <YAxis dataKey="students" />
          <Tooltip />

          <Legend />
          <Area
            type="monotone"
            data={Data3}
            dataKey="students"
            stroke="#aee8f1"
            fill="#f1fbfc"
            dot={{ r: 7 }}
          />
          <Area
            type="monotone"
            // data={Name}
            dataKey="students"
            stroke="#037dfe"
            fill="#e4f1fe"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart_overview1;
