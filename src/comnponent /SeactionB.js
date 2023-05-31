import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NumberOfTicket, Seatnumber, TotalAmount } from "../store/counterSlice";

import "./seaction.css";

function SeactionB() {
  const seat = useSelector((state) => state.counter.seats);
  const dispatch = useDispatch();
  const Amounthandel = (event) => {
    event.preventDefault();
    dispatch(Seatnumber(event.target.innerText));
    dispatch(NumberOfTicket());
    dispatch(TotalAmount(250));
  };
  return (
    <div>
      <section>
        <h1>Section B ₹250</h1>

        {Array.from({ length: 35 }, (_, number) => (
          <button
            className={seat.includes(`${number + 31}`) ? "disabled" : ""}
            onClick={Amounthandel}
          >
            {number + 31}
          </button>
        ))}
      </section>
    </div>
  );
}

export default SeactionB;
