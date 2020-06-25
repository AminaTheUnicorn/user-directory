import React from "react";
import Container from "./components/Container";
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import SearchForm from "./components/SearchForm/SearchForm";


function App(){
    return (
        <Container>
            <Header></Header>
            <SearchForm></SearchForm>
            <SearchResults></SearchResults>
        </Container>
    );

  
        




    };

export default App;



