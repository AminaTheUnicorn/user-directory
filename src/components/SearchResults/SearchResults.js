import React, { Component } from "react";
import axios from "axios";
import Container from "../Container";


class SearchResults extends Component {
  // state = {
  //   result: {},
  //   search: ""
  //   // search: "",
  //   // name: [],
  //   // results: [],
  //   // error: ""
  // };

  // componentDidMount() {
    
  //  this.getEmployee() 
  // }

  // getEmployee = query=> {
  //   API.getUsers(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
     
  // }

  

  // // searchEmployee = query => {
  // //   API.getUsers
  // //     .then(res => this.setState({ result: res.data }))
  // //     .catch(err => console.log(err));
  // // };

  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchMovies(this.state.search);
  // };

  state = {
    results: {},
    persons: [],
    search: "",
    loading: true
  };

  componentDidMount() {
 axios.get("https://randomuser.me/api/?results=200&nat=us")
 .then(res => {
   console.log(res.data.results);
   this.setState({persons:res.data.results})
 })
  }
  

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
    <tr>
      <th scope="row"> <td>{this.state.persons.map(person => <p>{person.image}</p>)}</td></th>
    <td>{this.state.persons.map(person => <p>{person.name.first}</p>)}</td>
      <td>{this.state.persons.map(person => <p>{person.cell}</p>)}</td>
      <td>{this.state.persons.map(person => <p>{person.email}</p>)}</td>
      <td>{this.state.persons.map(person => <p>{person.dob.date}</p>)}</td>
    </tr>
    
  </tbody>
</table>
     

     
      </Container>


    );
  }

}


export default SearchResults;