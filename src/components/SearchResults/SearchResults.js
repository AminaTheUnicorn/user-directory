import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../SearchForm/SearchForm";
// import API from "../../utils/API";
import Container from "../Container";

class SearchResults extends Component {
  state = {
    results: {},
    name: [],
    persons: [],
    search: "",
    loading: true,
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200&nat=us").then((res) => {
      console.log(res.data.results);
      this.setState({ persons: res.data.results });
    });
  }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getUsers(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };

  render() {
    return (
      <Container>
        <SearchForm>
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          name={this.state.name}
        </SearchForm>

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
            {this.state.persons.map((person) => (
              <tr>
                <td> 
                  <img key={person.id.value} src={person.picture.thumbnail} />
                </td>

                <td> {person.name.first}</td>
                <td> {person.cell}</td>
                <td> {person.email}</td>
                <td> {person.dob.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    );
  }
}

export default SearchResults;
