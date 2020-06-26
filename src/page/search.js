import React, { Component } from "react";
// import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import axios from "axios";


class Search extends Component {
  state = {
    search: "",
    filteredSearch: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base name and update this.state.name
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200&nat=us").then((res) => {
      console.log(res.data.results);
      this.setState({
         results: res.data.results,
         filteredSearch: res.data.results,
         });
    });
  }

  handleInputChange = event => { 
  

    this.setState({ filteredSearch: this.state.results.filter(person => person.name.first.includes(event.target.value) || person.name.last.includes(event.target.value))  });
  };


  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Name:</h1>
         
          <SearchForm
            handleInputChange={this.handleInputChange}
            name={this.state.name}
          />
          <SearchResults results={this.state.filteredSearch}
        
          />
        </Container>
      </div>
    );
  }
}

export default Search;
