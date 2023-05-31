import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NumberOfTicket, Seatnumber, TotalAmount } from "../store/counterSlice";
import "./seaction.css";

function SeactionC() {
  const seat = useSelector((state) => state.counter.seats);
  const dispatch = useDispatch();
  const Amounthandel = (event) => {
    event.preventDefault();

    dispatch(Seatnumber(event.target.innerText));
    dispatch(NumberOfTicket());
    dispatch(TotalAmount(150));
  };
  return (
    <div>
      <section>
        <h1>Section C ₹150</h1>

        {Array.from({ length: 50 }, (_, number) => (
          <button
            className={seat.includes(`${number + 66}`) ? "disabled" : ""}
            onClick={Amounthandel}
          >
            {number + 66}{" "}
          </button>
        ))}
      </section>
    </div>
  );
}

export default SeactionC;
