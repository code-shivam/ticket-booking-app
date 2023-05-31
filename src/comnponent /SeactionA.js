import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NumberOfTicket, Seatnumber, TotalAmount } from "../store/counterSlice";
import "./seaction.css";
function SeactionA() {
  const seat = useSelector((state) => state.counter.seats);

  const dispatch = useDispatch();
  const Amounthandel = (event) => {
    event.preventDefault();
    dispatch(Seatnumber(event.target.innerText));
    dispatch(NumberOfTicket());
    dispatch(TotalAmount(500));
  };
  return (
    <div>
      <section>
        <h1>Section A ₹500</h1>

        {Array.from({ length: 30 }, (_, number) => (
          <button
            className={seat.includes(`${number + 1}`) ? "disabled" : ""}
            onClick={Amounthandel}
          >
            {number + 1}
          </button>
        ))}
      </section>
    </div>
  );
}

export default SeactionA;
