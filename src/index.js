import ReactDOM from "react-dom";
import "mvp.css";

import App from "./App";

(async function () {
  const url = "https://swapi.dev/api/people/?";
  const apiResponce = await fetch(url);

  const characters = await apiResponce.json();

  const root = document.getElementById("root");
  ReactDOM.render(<App characters={characters} />, root);
})();
