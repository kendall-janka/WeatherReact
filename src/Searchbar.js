import React from "react";
import "./App.css";
export default function Searchbar() {
  return (
    <div className="Searchbar">
      <form id="searchForm">
        <div className="row" max-width="80%">
          <div class="col-5 col-md-5 col-lg-4">
            <input
              id="inputCity"
              type="search"
              placeholder="Enter a City"
              class="search-input"
              autocomplete="off"
              input
            ></input>
          </div>
          <div className="col-5 col-md-4 col-lg-2 p-0">
            <input
              id="searchButton"
              type="submit"
              class="btn btn-outline-info w-100"
              value="Search"
              input
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
