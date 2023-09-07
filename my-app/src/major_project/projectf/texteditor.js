import React, { useState } from "react";
import JoditEditor from "jodit-react";
import "./TextAditor.css";
import Desboard from "./chartdesbord";
import { useRef } from "react";
import "./maindash.css";
function Texteditor() {
  const [content, setContent] = useState("");
  const editor = useRef(null);

  return (
    <>
    <Desboard/>
    <div
        style={{
          height: "78px",

          position: "relative",
          left: "270px",
          width: "77%",

          top: "77px",
          padding: "10px",
        }}
      >
        <span style={{ opacity: "0.5" }}>Add New Data..</span>
        <h1
          style={{
            opacity: "0.8",
          
            fontFamily: "math",

            fontSize: "33px",
          }}
        >
          Purchase Table
        </h1>
      </div>
    <div
        className="main"
        style={{
          position: "relative",
          width: "81%",
          top: "591px",
          left: "277px",
          height: "79vh",
          top:" 73px"
        }}
      >
      <div className="TextAditorOuter1" >
        <div className=" TextAditorOuter"  style={{ borderRadius: "10px" ,boxShadow:
            "0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1)",
       }}>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
            
          />
        </div>
        <div className="outerchild">
          <div className="child3" >
            <div
              style={{
                position: "relative",
                width: "auto",
                height: "50px",
                padding: "16px",
              }}
            >
              {" "}
              Actions
            </div>
            <div style={{ paddingLeft: "8px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "111px",
                  height: "30px",
                  alignItems: "center",

                  margin: "8px 0px"
                

                  
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <spam>icon</spam>
                  <spam>Status</spam>
                  <spam>Draft</spam>
                </div>
                <spam>a</spam>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "111px",
                  height: "30px",
                  alignItems: "center",
                  margin: "8px 0px"
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <spam>icon</spam>
                  <spam>Status</spam>
                  <spam>Draft</spam>
                </div>
                <spam>a</spam>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "111px",
                  height: "30px",
                  alignItems: "center",
                  margin: "8px 0px"
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <spam>icon</spam>
                  <spam>Status</spam>
                  <spam>Draft</spam>
                </div>
                <spam>a</spam>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "111px",
                  height: "30px",
                  alignItems: "center",
                  margin: "8px 0px"
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <spam>icon</spam>
                  <spam>Status</spam>
                  <spam>Draft</spam>
                </div>
                <spam>a</spam>
              </div>
              
            </div>
            <div  style={{
                  display: "flex",
                  gap: "200px",
                  height: "0px",
                  alignItems: "center",
                  padding:"13px 16px"
                }}>
                  <button> hi</button>
                  <button>hi</button>
                </div>
          </div>


          <div className="child3" style={{boxShadow:
            "0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1)",
       }}>
            <div
              style={{
                position: "relative",
                width: "auto",
                height: "50px",
                padding: "16px",
                
              }}
            >
              {" "}
              Categories
            </div>
            <div style={{ paddingLeft: "8px" }}>
              <div
                style={{
                  display: "flex",
                 
                  height: "30px",
                  alignItems: "center",

                  margin: "5px 0px"
                

                  
                }}
              >
                <div style={{ display: "flex", }}>
                <form style={{display:"flex",gap:"6px"}}>
      <input type="checkbox"  style={{    height: "21px",
    width: "17px"}}/>
      <label>Uncategorized</label>
    </form>
                  
                 
                </div>
             
              </div>
              <div
                style={{
                  display: "flex",
                 
                  height: "30px",
                  alignItems: "center",
                  margin: "5px 0px"
                }}
              >
                <div style={{ display: "flex", }}>
                <form style={{display:"flex",gap:"6px"}}>
      <input type="checkbox"  style={{    height: "21px",
    width: "17px"}}/>
      <label>Design</label>
    </form>
                
               
                </div>
           
              </div>
              <div
                style={{
                  display: "flex",
             
                  height: "30px",
                  alignItems: "center",
                  margin: "5px 0px"
                }}
              >
                <div style={{ display: "flex", }}>
                <form style={{display:"flex",gap:"6px"}}>
      <input type="checkbox"  style={{    height: "21px",
    width: "17px"}}/>
      <label>Development</label>
    </form>
                 
                  
                </div>
        
              </div>
              <div
                style={{
                  display: "flex",
             
                  height: "30px",
                  alignItems: "center",
                  margin: "5px 0px"
                }}
              >
                <div style={{ display: "flex",  }}>
                <form style={{display:"flex",gap:"6px"}}>
      <input type="checkbox"  style={{    height: "21px",
    width: "17px"}}/>
      <label>Writing</label>
    </form>
                 
                  
                </div>
                     
              </div>
              <div
                style={{
                  display: "flex",
               
                  height: "30px",
                  alignItems: "center",
                  margin: "5px 0px"
                }}
              >
                <div style={{ display: "flex",  }}>
                <form style={{display:"flex",gap:"6px"}}>
      <input type="checkbox"  style={{    height: "21px",
    width: "17px"}}/>
      <label>Books </label>
    </form>
                 
                  
                </div>
                     
              </div>
              
            </div>
            <div  style={{
                  display: "flex",
                  gap: "200px",
                  height: "0px",
                  alignItems: "center",
                  padding:"13px 16px"
                }}>
                  <button> hi</button>
                  <button>hi</button>
                </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Texteditor;
