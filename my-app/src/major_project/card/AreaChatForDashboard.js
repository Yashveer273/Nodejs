import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import "../projectf/area.css";

const AreaCharForDashboard = () => {
  const COLORS = ["#cdb3d6", "#63bccc", "#46cacc","#f8c0e7","#76a0e6" ];
  const Data3 = [
    {
      name: "Apple",
      value: 54.85,
     
    },
    {
      name: "Samsung",
      value: 47.91,
      color:"#82ca9d"
    },
    {
      name: "Redmi",
      value: 16.85,

    },
    {
      name: "One Plus",
      value: 16.14,
 
      
    },
    {
      name: "Others",
      value: 10.25,
   
    },
  ];

  return (
    <>
      <PieChart
        width={403}
        height={395}
        className="xyz"
        style={{ background: "white", boxShadow: "-1px 0px 20px -10px" }}
      >
        <Pie
            data={Data3}
            dataKey="value"
            nameKey="name"
            outerRadius={105}
          
            height="inline"
            startAngle={360}
            endAngle={0}
            cx="50%"
            cy="50%"
        label
        >
            {
      Data3.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index]}/>
      ))
    }

        </Pie>
        {Data3.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
        <Tooltip />

        <Legend />
      </PieChart>
    </>
  );
};
export default AreaCharForDashboard;


