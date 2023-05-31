import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NumberOfTicket, Seatnumber, TotalAmount } from "../store/counterSlice";
import { useSearchParams } from "react-router-dom";

function SeactionA() {
  const seat =useSelector((state)=>state.counter.seats)
  
  const dispatch =useDispatch()
  const Amounthandel=(event)=>{
    dispatch(Seatnumber(event.target.innerText))
    dispatch(NumberOfTicket())
dispatch(TotalAmount(500))
  }
  return (
    <div>
      <section>
        <h1>Section A ₹500</h1>

        {Array.from({ length: 30 }, (_, number) => (
          <button onClick={Amounthandel}>{number + 1}</button>
        ))}
      </section>
    </div>
  );
}

export default SeactionA;
