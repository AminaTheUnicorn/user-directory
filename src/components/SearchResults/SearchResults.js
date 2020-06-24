import React, { Component } from "react";
import API from "./.././../utils/API"


class SearchResults extends Component {
    state = {
        search: "",
        name: [],
        results: [],
        error: ""
      };

    componentDidMount() {
        API.getBaseBreedsList()
          .then(res => this.setState({ name: res.data.name }))
          .catch(err => console.log(err));
      };

    

}


export default SearchResults;