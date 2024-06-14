import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./../Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useNavigate();

  function handleSubmit() {
    router("/report-page");
  }
  function handleChange(event) {
    setSearch(event.target.value);
    console.log(event.target.value);
  }
  console.log(search);
  return (
    <div id="main-page">
      <div id="content">
        <form onSubmit={handleSubmit} action="">
          <h1>Weather Forecast</h1>
          <input id="search-box" onChange={handleChange} name="search" type="text" />
          <br />
          <input id="submit-button" type="submit" name=""/>
        </form>
      </div>
    </div>
  );
};

export default Search;
