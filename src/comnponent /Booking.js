import React from "react";
import SeactionA from "./SeactionA";
import SeactionB from "./SeactionB";
import SeactionC from "./SeactionC";

function Booking() {
  
  const Booked=()=>{
    alert("ticket Booked")
  } 
  return <div>
    <SeactionA/>
    <SeactionB/>
    <SeactionC/>
    <button onClick={Booked}>Book & pay {}</button>
  </div>;
}

export default Booking;
