import React from "react";
import SeactionA from "./SeactionA";
import SeactionB from "./SeactionB";
import SeactionC from "./SeactionC";
import "./book.css"
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigation =useNavigate()
  const Booked=()=>{
   navigation("/counter")
  } 
  return <div>
    <SeactionA/>
    <hr/>
    <SeactionB/>
    <hr/>
    <SeactionC/>
    
    <button className="bookbtn" onClick={Booked}>Book & pay {}</button>
  </div>;
}

export default Booking;
