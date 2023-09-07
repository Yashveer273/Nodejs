import React from "react";
import "./Blog.css";
import Desboard from "./chartdesbord";
import { Data4 } from "./data3";
import { Data5 } from "./data3";
function Blog() {
  const styles = {
    backgroundImage:
      "url(https://designrevision.com/demo/shards-dashboard-lite-react/static/media/5.6e846951.jpeg)",
  };
  const styles1 = {
    backgroundImage:
      "url(https://designrevision.com/demo/shards-dashboard-lite-react/static/media/6.47789d67.jpeg)",
  };
  const dp1 = {
    backgroundImage:
      "url( https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600)",
    borderRadius: "50%",

    height: "47px",
    width: "47px",
    position: "relative",
    backgroundSize: "cover",
    display: "inline-block",
    top: "160px",
    left:"17px",

    border: "2px solid white",
  };
  const dp2 = {
    backgroundImage:
      "url( https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600)",
    borderRadius: "50%",

    height: "47px",
    width: "47px",
    position: "relative",
    backgroundSize: "cover",
    display: "inline-block",
    top: "182px",
    left:"17px",

    border: "2px solid white",
  };
  return (
    <>
      <Desboard />
      <div
        style={{
          height: "50px",

          position: "relative",
          left: "280px",
          width: "77%",

          top: "66px",
          padding: "10px",
        }}
      >
        <span style={{ opacity: "0.5" }}>COMPONENTS</span>
        <h1
          style={{
            opacity: "0.8",
          
            fontFamily: "math",

            fontSize: "33px",
          }}
        >
          Blog Posts
        </h1>
      </div>
      <div id="a">
        <div id="b">
          {Data4.map((item, index) => (
            <div id="c" key={item._id}>
              <div id="d" style={item.styles}>
              <div className="tag">    <p className="tag1">{item.Tag}</p></div>
              </div>

              <div id="e" style={{ paddingLeft: "20px", paddingRight: "15px" }}>
                <div id="f" style={item.dp1}></div>
                <h5
                  style={{
                    fontSize: "23px",
                    marginTop: "-22px",
                  }}
                >
                  {" "}
                  {item.HEADING}{" "}
                </h5>
                <p>{item.P}</p>
                <h3>{item.Date}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="c1">
          <div className="c2" style={{ height: "218px" }}>
            <div className="c1_2" style={styles}>
            <div className="tag2">    <p className="tag1">TRAVEL</p></div>
            <div id="f" style={dp1} ></div>
            </div>
         
            <div className="c1_3">

              <h3>
                Attention he extremity unwilling on otherwise cars backwards yet
              </h3>
              <p>
                Conviction up partiality as delightful is discovered. Yet
                jennings resolved disposed exertion you off. Left did fond drew
                fat head poor jet pan flying over...
              </p>
              <h3>29 February 2019</h3>
            </div>
          </div>
          <div className="c2">
            <div className="c2_2" style={styles1}>
            <div className="tag2">    <p className="tag1">BUSINESS</p></div>
            <div id="f" style={dp2}></div>
            </div>
          
            <div className="c1_3">
              <h3>
                Attention he extremity unwilling on otherwise cars backwards yet
              </h3>
              <p>
                Conviction up partiality as delightful is discovered. Yet
                jennings resolved disposed exertion you off. Left did fond drew
                fat head poor jet pan flying over...
              </p>
              <h3>29 February 2019</h3>
            </div>
          </div>
        </div>

        <div id="b">
          {Data5.map((item, index) => (
            <div id="c" style={{    margin: "24px 16px 0px"
            }} key={item._id}>
              <div id="d1" style={item.styles}>
             
          
              </div>

              <div id="e" style={{ paddingLeft: "20px", paddingRight: "15px" }}>
               
                <h5
                  style={{
                    fontSize: "23px",
                    marginTop: "-22px",
                  }}
                >
                  {" "}
                  {item.HEADING}{" "}
                </h5>
                <p>{item.P}</p>
                <h3>{item.Date}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
