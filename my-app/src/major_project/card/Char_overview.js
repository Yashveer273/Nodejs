

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

const Chart_overview = () => {
  const [Name1, setName1] = useState("");
  const [Name, setName] = useState("");
  useEffect(() => {
    getProduct();
    getProduct1();
  }, []);

  const getProduct = async () => {
    try {
      let result = await fetch("http://localhost:5000/getitem", {
        headers: {
          authorization: JSON.parse(localStorage.getItem("authentication")),
        },
      });
      result = await result.json();
      console.log(result.products, "ll");
      setName(result.products);
    } catch (error) {}
  };
  const getProduct1 = async () => {
    try {
      let result = await fetch("http://localhost:5000/getitemchart", {
        headers: {
          authorization: JSON.parse(localStorage.getItem("authentication")),
        },
      });
      result = await result.json();

      console.log(result, "hh");
      setName1(result);
    } catch (error) {
      console.log(" connection refuced ");
    }
  };
  return (
    <div style={{
  
      height: "110px",
      position: "relative",
      left: "-16px",
      top: "-66px",
      display: "inline-block"
  }}>
    <style>
        {`
          .recharts-surface {
            border-radius: 14px;
            overflow: hidden;
          }
        `}
      </style>
      <ResponsiveContainer width={"0%"} aspect={2} >

        <AreaChart
          data={Name}
          width={10}
          height={10}
          margin={{ top: 1, left: 0, right: 0, bottom: 0 }}
        
        >
          
          <Area
            type="monotone"
            data={Name}
            dataKey="Purches"
            stroke="#aee8f1"
            fill="#f1fbfc"
            dot={{r: 5}}
          />
          <Area
            type="monotone"
            // data={Name}
            dataKey="price"
            stroke= "#a2e5ed"
            fill="#d7e8ea"
            strokeWidth={2}
       
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart_overview;
