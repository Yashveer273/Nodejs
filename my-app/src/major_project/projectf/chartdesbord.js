import React, { useState } from "react";
import { useEffect } from "react";
import * as FaIcon from "react-icons/fa";
import { SidebarData } from "./data";
import { LeftCircleOutlined, UserOutlined,TwitterOutlined } from "@ant-design/icons";
import Menu from "./Menu";
import "./work.css";

import { Link } from "react-router-dom";

import * as AiIcon from "react-icons/ai";
import * as BiIcon from "react-icons/bi";

//  here i define dashboard design  or as we can say layout

const Desboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [selected, setSelected] = useState(0);
  const [sidebar, setSidebar] = useState(true);
  const [expanded, setExpaned] = useState(true);
  const [Name, setName] = useState();

  useEffect(() => {}, []);

  const showSidebar = () => {
    setSidebar(true);
  };
  const hideSlider = () => {
    setSidebar(false);
  };

  const LogOut = () => {
    localStorage.clear();
  };

  const user1 = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Search items...."
          size={130}
          style={{
            position: "fixed",
            left: "273px",
            top: "17px",
            zIndex: "2",
            border: "none",

          }}
        ></input>
        <div>
          <div>

          </div>
<Menu/>
        </div>
        <div
          className="bars"
          style={expanded ? { left: "0%" } : { left: "0%" }}
          onClick={() => setExpaned(!expanded)}
        >
          <FaIcon.FaBars onClick={showSidebar} />
        </div>

        <nav
          className={sidebar ? "nav-menu active" : "nav-menu"}
          style={{ boxShadow: "0px 61px 27px -14px"
           }}
        >
         

          <ul
            className="nav-menu-items"
            style={{ width: "99%", position: "relative", left: "-4px" ,}}
          >
            <li className="navbar-toggle" style={{ position: "absolute",width:"250px", height:"1px"}}>
              <LeftCircleOutlined
                className="cross"
                onClick={hideSlider}
                style={{ color: "black", fontSize:"1.8rem", float:"right"  }}
              />
            </li>
            <div className="cross1">
              {" "}
              <TwitterOutlined
                style={{
                  fontSize: "2.5rem",
                 position:"relative",
                 bottom:"-7px",
                 left:"10px",
                 color:"blue"
                  
                }}
              />
          
                
                <span className="logo1" style={{ fontSize: "1rem", marginLeft:"10px", fontWeight:"700" }}>
                  Shared Dashboard
               
                
              </span>
            </div>
            <div className="menu" style={{ marginTop: "26px" }}>
              {SidebarData.map((item, index) => {
                return (
                  <>
                  
                  
                  <div
                    className={
                      selected === index ? "menuItem active" : "menuItem"
                    }
                    style={{}}
                    key={index}
                    onClick={() => setSelected(index)}
                  >
                    <item.icon style={{ color: "#8f8c88" }} />

                    <Link to={item.Link} className="heading" style={{    display: "flex",
    width: "169px",
    height: "37px",
    alignItems: "center"}} >
                      <span>{item.heading}</span>
                    </Link>
                  </div>
                  </>
                );
              })}
             
              <Link
                className="heading"
                style={{
                  position: "relative",
                  left: "-34px",
                  bottom: "-181px",
                }}
              >
                {user1 ? (
                  <Link to="/" className="heading">
                    <span
                      onClick={LogOut}
                      style={{ fontSize: "2rem", marginLeft: "30px" }}
                    >
                      <BiIcon.BiLogOutCircle />
                    </span>
                  </Link>
                ) : (
                  <Link to="/" className="heading">
                    <span></span>
                  </Link>
                )}
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Desboard;
