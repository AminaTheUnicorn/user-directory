import React from "react";
// import SearchResults from "../SearchResults/SearchResults";

function SearchForm() {
  return (
    <form>
      <div class="form-group">
        <label for="search"></label>
        <input

          type="userSearch"
          class="form-control"
          id="userSearch"
          // onChange={props.handleInputChange}
          // value={props.value}
          aria-describedby="userSearch"
          placeholder="Search" />
      
        <br />
        {/* <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button> */}

      </div>
    </form>
  );
}


export default SearchForm;