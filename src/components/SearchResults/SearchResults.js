import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../SearchForm/SearchForm";
// import API from "../../utils/API";
import Container from "../Container";

class SearchResults extends Component {
  state = {
    // results: {},
    name: [],
    results: [],
    filterResults: [],
    search: "",
  
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200&nat=us").then((res) => {
      console.log(res.data.results);
      this.setState({
         results: res.data.results,
         filteredResults: res.data.results,
         });
    });
  }

  // handleInputChange = (event) => {

  //   results.name.first.includes(event.target.value)
 
  //   this.setState({ search: event.target.value, filteredResults: filtering });
  // };


  render() {
    return (
      <Container>

        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.map((person) => (
              <tr>
                <td> 
                  <img key={person.id.value} src={person.picture.thumbnail} alt=" random person" />
                </td>

                <td key={person.id.value} > {person.name.first}</td>
                <td key={person.id.value} > {person.cell}</td>
                <td key={person.id.value} > {person.email}</td>
                <td key={person.id.value} > {person.dob.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    );
  }
}

export default SearchResults;
