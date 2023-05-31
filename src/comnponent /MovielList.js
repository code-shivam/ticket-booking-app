import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LocalMovieData from "../data/localData";
import { MovieTital } from "../store/counterSlice";
import { useNavigate } from "react-router-dom";

function MovielList() {
  const MovieData = LocalMovieData;
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handelclick = (ele) => {
    dispatch(MovieTital(ele));
    navigation("/Booking");
  };

  return (
    <div>
      {MovieData.map((el, key) => (
        <div key={key}>
          <p>{el.Title}</p>
          <button onClick={() => handelclick(el.Title)}>BOOK MOVIE </button>
        </div>
      ))}
    </div>
  );
}

export default MovielList;
