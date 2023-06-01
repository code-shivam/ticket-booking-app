import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./counter.css";
import Timer from "../Timer/Timer";
function Counter() {
  const seats = useSelector((state) => state.counter.seats);
  const moviename = useSelector((state) => state.counter.name);
  const numberofticket = useSelector((state) => state.counter.numberofticket);
  const amount = useSelector((state) => state.counter.amt);
  const navigation = useNavigate();
  const counter = () => {
    alert("your ticket is booked");
    navigation("/");
    window.location.reload(false);
  };
  const Back = () => {
    navigation("/Booking");
  };

  return (
    <div className="main">
      <div className="counter">
         <Timer/>
         <h1>book your ticket</h1> 
        <h2>Movie Name </h2>
        <p>{moviename}</p>
        <h2>Seat Number</h2>
        <p>{seats + ""}</p>
        <h2> Total Seat</h2>
        <p>{numberofticket}</p>
        <h2>Amount</h2>
        <p>{amount}</p>
        <div>
          <button onClick={() => counter()}> book now</button>
          <button onClick={Back}>Back</button>
         
        </div>
      </div>
    </div>
  );
}

export default Counter;
