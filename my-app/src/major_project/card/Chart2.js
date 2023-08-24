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

const Chart2 = () => {
  const [Name1, setName1] = useState("");
  const [Name, setName] = useState("");
  useEffect(() => {
    getProduct();
    getProduct1();
  }, []);

  const getProduct = async () => {
    try {
      let result = await fetch("http://52.15.151.201:5000/getitem", {
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
      let result = await fetch("http://52.15.151.201:5000/getitemchart", {
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
    <div>
      <ResponsiveContainer width={"90%"} aspect={2}>
        <AreaChart
          data={Name}
          width={30}
          height={30}
          margin={{ top: 1, left: 100, right: 7, bottom: 1 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="Name" />

          <YAxis dataKey="Purches" />
          <Tooltip />

          <Legend />
          <Area
            type="monotone"
            data={Name1}
            dataKey="Purches"
            stroke="red"
            fill="gray"
          />
          <Area
            type="monotone"
            data={Name}
            dataKey="price"
            stroke="red"
            fill="gray"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart2;
