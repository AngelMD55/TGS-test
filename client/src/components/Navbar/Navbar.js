import React from 'react'
import Navlogin from "../Navlogin/Navlogin";

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-l " style={{backgroundColor: "#3B5998", color: "white"}}>
        <div style={{marginLeft: "100px"}}>
            <h1>FakeBook</h1>
        </div>
        <div  className="nav justify-content-end ">
            <Navlogin 
            email={props.email}
            password={props.password}
            handleInputChange = {props.handleInputChange}
            loginOnClick = {props.loginOnClick}
            />
        </div>
            
        </nav>
    )
}
