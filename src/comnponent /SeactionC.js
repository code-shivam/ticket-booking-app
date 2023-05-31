import React from 'react'
import { useDispatch } from 'react-redux'
import { NumberOfTicket, Seatnumber, TotalAmount } from '../store/counterSlice'

function SeactionC() {
  const dispatch =useDispatch()
  const Amounthandel=(event)=>{
    dispatch(Seatnumber(event.target.innerText))
    dispatch(NumberOfTicket())
dispatch(TotalAmount(150))
  }
  return (
    <div>
        <section>
        <h1>Section C ₹150</h1>

        {Array.from({ length: 50}, (_, number) => (
          <button onClick={Amounthandel}>{number + 66}</button>
        ))}
      </section>
    </div>
  )
}

export default SeactionC