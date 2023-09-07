import TextArea from "antd/lib/input/TextArea";
import "./AddNawPost1.css";
import Desboard from "./chartdesbord";
import React from "react";

import { useState } from "react";

const AddNewPost = () => {
  const [formData, setFormData] = useState({
    firstName: "Sierra",
    lastName: "Brooks",
    email: "sierra@example.com",
    password: "1111",
    address: "1234 Main St",
    zipCode: "",
    state: "",
    city: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
<Desboard/>
<div
        style={{
          height: "20px",

          position: "relative",
          left: "293px",
          width: "77%",

          top: "80px",
          padding: "10px",
        }}
      >
        <span style={{ opacity: "0.5" }}>OVERVIEW</span>
        <h1
          style={{
            opacity: "0.8",
          
            fontFamily: "math",

            fontSize: "33px",
          }}
        >
          User Profile
        </h1>
      </div>
<div
        className="main"
        style={{
          position: "relative",
          width: "79%",
   
          left: "0px",
          height: "79vh",
        }}
      >
      <div className="main1" style={{position:"relative", left:"277px"}} >
        <div className="mainchild1">
          <div>
            <div className="outerdp">
              <div className="dp">
                <img
                  className="dp"
                  style={{
                    left: "0px",
                  }}
                  src="https://designrevision.com/demo/shards-dashboard-lite-react/static/media/0.73476783.jpg"
                />
              </div>

              <h1 style={{ margin: "0", height: "38px" }}>Sierra Brooks</h1>
              <h3
                style={{
                  margin: "0",
                  padding: "0",
                  height: "80px",
                }}
              >
                Project Manager
              </h3>
            </div>
          </div>
          <div className="outer2">
            <h2
              style={{
                margin: "0",
              }}
            >
              Workload
            </h2>
            <div className="outer2_1">
              <div class="progress-sm progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="74"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "79%" }}
                ></div>
              </div>
              <span>47%</span>
            </div>
          </div>

          <div className="outer3">
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              eaque, quidem, commodi soluta qui quae minima obcaecati quod
              dolorum sint alias, possimus illum assumenda eligendi cumque?
            </p>
          </div>
        </div>
        <div className="mainchild2">
          <div> Account Details</div>
          <form onSubmit={handleSubmit} style={{ marginTop: "32px" }}>
            <div className="outerName">
              <label
                style={{
                  paddingLeft: "90px",
                }}
              >
                First Name:
                <div
                  className="firstname"
                  style={{
                    width: "390px",
                  }}
                >
                  <input
                    type="text"
                    name="fistname"
                    value={formData.firstName}
                    onChange={handleChange}
                    size={45}
                  />
                </div>
              </label>

              <label>
                Last Name:
                <div className="lastname">
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastName}
                    onChange={handleChange}
                    size={40}
                  />
                </div>
              </label>
            </div>
            <div className="outerName">
              <label
                style={{
                  paddingLeft: "90px",
                }}
              >
                Email:
                <div
                  className="firstname"
                  style={{
                    width: "390px",
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    size={45}
                  />
                </div>
              </label>
              <label>
                Password:
                <div className="lastname">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    size={40}
                  />
                </div>
              </label>
            </div>
            <div
              className="outerName"
              style={{ justifyContent: "space-between", paddingLeft: "30px" }}
            >
              <label>
                Address:
                <div className="address">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    size={94}
                  />
                </div>
              </label>
            </div>
            <div className="outerName" style={{ gap: "21px" }}>
              <label>
                ZIP Code:
                <div className="zip">
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Zip"
                    size={25}
                  />
                </div>
              </label>
              <label>
                State:
                <div className="state " style={{ width: "177px" }}>
                  <input
                    placeholder="up"
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    size={20}
                  />
                </div>
              </label>
              <label>
                City:
                <div className="city">
                  <input
                    placeholder="City"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    size={31}
                  />
                </div>
              </label>
            </div>
            <div style={{justifyContent:"center" , alignItems:"center", padding:"30px"}} height={100} >
            <label >
              Description:
              <div>
                <textarea type="text" rows={7}
        cols={96}/>
              </div>
            </label>
            </div>
            
            <button type="submit" style={{    position: "relative",
    top: "-19px",
    left: "30px",
    width: "92px"}}>Submit</button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};
export default AddNewPost;
