import React from "react";
import "../styles/App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="Nasa logo"
      />
      <SearchForm />
    </div>
  );
}

export default App;
