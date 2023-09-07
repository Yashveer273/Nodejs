import React from "react";
import { useState } from "react";
import "./maindash.css";
import Cards from "../cards/cards";

import Desboard from "./chartdesbord";
import AddNewPost from "./AddNewPost";
import AreaCharForDashboard from "../card/AreaChatForDashboard";
import Chart_overview1 from "../card/chat_overview1";


//  here i define landing page of this project using table 1 and dashboard layout
const Maindash = () => {
  const [name, setName] = useState("");
  const child1Data = [
    {
      Image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
      strong1: "John Doe on Hello World!- 3 days ago",
      strong2: "Well, the way they make shows is, they make one show ...",
    },
    {
      Image:
        "https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=600",
      strong1: "John Doe on Hello World!- 4 days ago",
      strong2: "After the avalanche, it took us a week to climb out. Now...",
    },
    {
      Image:
        "https://images.pexels.com/photos/2167673/pexels-photo-2167673.jpeg?auto=compress&cs=tinysrgb&w=600",
      strong1: "John Doe on Hello World!- 5 days ago",
      strong2: "My money's in that office, right? If she start giving me...",
    },
  ];
  const Data4 = [
    {
      Source: "GitHub",
      Number: "123",
    },
    {
      Source: "Stack Overflow",
      Number: "123",
    },
    {
      Source: "Hacker News",
      Number: "123",
    },
    {
      Source: "Reddit",
      Number: "123",
    },
    {
      Source: "The Next Web",
      Number: "123",
    },
    {
      Source: "Tech Crunch",
      Number: "123",
    },
    {
      Source: "YouTube",
      Number: "123",
    },
    {
      Source: "Adobe",
      Number: "123",
    },
  ];

  return (
    <>
      <Desboard />
      
      <div className="MainDash">
      <div
        style={{
          height: "50px",

          position: "relative",
          left: "293px",
          width: "77%",

          top: "-31px",
          padding: "10px",
        }}
      >
        <span style={{ opacity: "0.5" }}>DASHBOARD</span>
        <h1
          style={{
            opacity: "0.8",
          
            fontFamily: "math",

            fontSize: "33px",
          }}
        >
          Blog Overview
        </h1>
      </div>
        <Cards />
       
      </div>

      <div className="main">
        <div
          style={{
            position: "absolute",
            width: "85%",
            height: "543px",
            background: "white",
            borderRadius: "15px",
            boxShadow: "-1px 0px 20px -10px",
            left: "27px",
          }}
        >
          <Chart_overview1 />
        </div>
        <div
          style={{
            position: "absolute",
            left: "91%",
          }}
        >
          <AreaCharForDashboard />
        </div>
      </div>

      <div
        className="main"
        style={{
          position: "relative",
          width: "79%",
          top: "591px",
          left: "277px",
          height: "79vh",
        }}
      >
        <div
          className="child1"
          style={{
            width: "415px",
            height: "469px",
            margin: "0px 0px 24px",
            padding: "0px 15px",
            boxShadow: "-1px 0px 20px -10px",
          }}
        >
          <div style={{ height: "56px", padding: "16px" }}>
            <h3>New Draft</h3>
          </div>
          <div style={{ height: "35px", padding: "7px,12px" }}>
            <input
              style={{
                border: "node",
                color: "#e1e5eb",
                fontWeight: "100",
                borderRadius: "0.25rem",
              }}
              className="input-field"
              onChange={(e) => setName(e.target.value)}
              placeholder=" Brave New World"
              minLength="3"
            ></input>
          </div>
          <div style={{ height: "280px", padding: "7px,12px" }}>
            <textarea
              style={{
                border: "node",
                width: "346px",
                height: "263px",
                borderColor: "#e1e5eb",
                fontWeight: "100",
                borderRadius: "0.25rem",
              }}
              className="input-field"
              type="txt"
              onChange={(e) => setName(e.target.value)}
              placeholder=" Brave New World"
              minLength="3"
            ></textarea>
          </div>
          <div style={{ height: "33px" }}>
            <button>1</button>
          </div>
        </div>

        <div
          className="child1"
          style={{ width: "520px", boxShadow: "-1px 0px 20px -10px" }}
        >
          <div style={{ width: "490px", height: "56px", padding: "16px" }}>
            <h3>Discription</h3>
          </div>

          {child1Data.map((item, index) => (
            <div
              key={item._id}
              style={{
                height: "115px",
                padding: "16px",
                display: "flex",
                borderTop: "1px solid #e1e5eb",
                BorderBottom: "1px solid #e1e5eb",
              }}
            >
              <div
                style={{
                  height: "50px",
                  borderRadius: "4px",
                  margin: "0px 16px 0px 0px",
                }}
              >
                <img
                  src={item.Image}
                  style={{ height: "50px", width: "50px", borderRadius: "5px" }}
                />
              </div>
              <div>
                <span>{item.strong1}</span>
                <br></br>
                <strong>{item.strong2}</strong>
                <br></br>
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div>
            </div>
          ))}
          <div
            style={{
              width: "490px",
              height: "56px",
              padding: "16px",
              display: "flex",
              justifyContent: "center",
              borderTop: "1px solid #e1e5eb",
            }}
          >
            <h3>Discription3</h3>
          </div>
        </div>

        <div
          className="child1"
          style={{
            width: "304px",
            height: "444px",
            boxShadow: "-1px 0px 20px -10px",
          }}
        >
          <div style={{ padding: "16px" }}>Top Referrals</div>
          {Data4.map((item, index) => (
            <div
              key={item._id}
              style={{
                height: "40px",

                margin: "0px 0px -1px",
                padding: "10px 16px",
                display: "block",
                borderTop: "1px solid #e1e5eb",
                BorderBottom: "1px solid #e1e5eb",
              }}
            >
              <span style={{ opacity: ".5" }}>{item.Source}</span>
              <span style={{ float: "right", opacity: ".5" }}>
                {item.Number}
              </span>
            </div>
          ))}
          <div
            style={{
              height: "65px",
              padding: "16px",
              display: "flex",
              borderTop: "1px solid #e1e5eb",
            }}
          >
            <h3>Discription3</h3>
          </div>
        </div>
     

     
      </div>
     
     
   
      
 
    </>
  );
};

export default Maindash;
