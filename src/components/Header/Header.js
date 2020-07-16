import React from "react";
import "../Header/styles/Header.css";

function Header(){

    return (
    <div class="jumbotron jumbotron-fluid bg-info" style={{color:"white"}}>
        <div class="container">
            <h1 class="display-4">Employee Directory</h1>
            <p class="lead">Use the search box to narrow your results.</p>
        </div>
    </div>
);
    }
export default Header;