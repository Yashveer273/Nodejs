import React, { useState } from "react";
import "./card.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes, } from "@iconscout/react-unicons";
import Chart from "./chart";
import Chart2 from "./Chart2";
import Chart_overview from "./Char_overview";


                                                   // here i define card functioning 
import Chart3 from "./Chart3";
const Card = (props) => {
  // in this fun we getting data or chart as a props and sending this to expandecard and compactcard
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

//  here i define what we see when car is small or not open 
function CompactCard({ param, setExpanded }) {
  const Icon = param.png;
  
  
    
  
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
        
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
      
    >
      
      <div className="radialBar">
     
         <h1 style={{
              columnGap: "1px",
              display: 
              "flex"
          }
         }>  {param.barValue} </h1> 
           

        <span>{param.title}</span>
      </div>
   
<div>
  
</div>
      <Chart_overview/>

    </motion.div>
   
  );
}
//  here i define what we see when card open or full size
function ExpandedCard({ param, setExpanded }) {
  function getCondition(){
    if(param.title==="Expenses"){
      return<div>
        <Chart/>
      </div>}
      else if(param.title==="Revenue"){
        return <div>
         <Chart2/> 
        </div>
      }
      else{
        return<div><Chart3/></div>
      }
    }
  
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background:"White",
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >

      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "black" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span  style={{  color: "black" }}>{param.title} </span>
      <div className="chartContainer">
        
          
{getCondition()}
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
