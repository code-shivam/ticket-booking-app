import React from 'react'
import { useDispatch } from 'react-redux'
import { NumberOfTicket, Seatnumber, TotalAmount } from '../store/counterSlice'

function SeactionB() {
  const dispatch =useDispatch()
  const Amounthandel=(event)=>{
    dispatch(Seatnumber(event.target.innerText))
    dispatch(NumberOfTicket())
dispatch(TotalAmount(250))
  }
  return (
    <div>
        <section>
        <h1>Section B ₹250</h1>

        {Array.from({ length: 35 }, (_, number) => (
          <button onClick={Amounthandel}>{number + 31}</button>
        ))}
      </section>
    </div>
  )
}

export default SeactionB