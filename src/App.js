import React from "react";
import Container from "./components/Container";
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import SubmitForm from "./components/SubmitForm/SubmitForm";


function App(){
    return (
        <Container>
            <Header></Header>
            <SubmitForm></SubmitForm>
            <SearchResults></SearchResults>
        </Container>
    );

  
        




    };

export default App;



