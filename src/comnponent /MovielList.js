import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LocalMovieData from "../data/localData";
import { MovieTital } from "../store/counterSlice";
import { useNavigate } from "react-router-dom";
import "./movie.css"

function MovielList() {
  const MovieData = LocalMovieData;
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handelclick = (ele) => {
    dispatch(MovieTital(ele));
    navigation("/Booking");
  };

  return (
    <div className="movielist">
      {MovieData.map((el, key) => (
        <div  className="movie" key={key}>
          <img src={el.Poster} height={"350px"} width={"90%"}/>
          <h1>{el.Title}</h1>
          <button className="btn" onClick={() => handelclick(el.Title)}>BOOK MOVIE </button>
        </div>
      ))}
    </div>
  );
}

export default MovielList;
