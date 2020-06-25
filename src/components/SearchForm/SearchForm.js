import React from "react";

function SearchForm() {
    return (
      <form>
          <div class="form-group">
    <label for="search"></label>
    <input 
    
    type="userSearch" 
    class="form-control" 
    id="userSearch" 
    aria-describedby="userSearch"  
    placeholder="Search"/>
  
  </div>
      </form>
    );
}


export default SearchForm;