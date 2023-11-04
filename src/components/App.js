import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";

function App() {
  const [movies] = useState({
    1: {
      id: 1,
      title: "A River Runs Through It",
      description: "A movie about a family in Montana.",
      releaseDate: "May 26, 1992",
    },
    2: {
      id: 2,
      title: "Se7en",
      description: "A thriller about detectives chasing a serial killer.",
      releaseDate: "September 22, 1995",
    },
    3: {
      id: 3,
      title: "Inception",
      description: "A science fiction heist thriller.",
      releaseDate: "July 16, 2010",
    },
  });
  

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <MoviesPage movies={movies} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
