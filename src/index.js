import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import Something from "./StarRating";

const Test = () => {
  const [moveieRating, setMovieRating] = useState(0);
  return (
    <div>
      <Something color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>The movie was rated {moveieRating} stars</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    <Something maxRating={5} />
    <Test />
  </React.StrictMode>
);
