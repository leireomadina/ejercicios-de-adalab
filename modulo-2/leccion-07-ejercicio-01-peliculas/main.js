"use strict";

function workWithMovies() {
  const movies = ["Bram Stoker's Dracula", "The fellowship of the ring", "Black swan"];
  movies[3] = "Portrait of a lady on fire";
  movies[3] = "In the mood for love";
  movies[1] = "Mountains may depart";
  return console.log(movies);
}

workWithMovies();
