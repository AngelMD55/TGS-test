import React from 'react'
import earth from "./earth.jpg";

export default function Jumbotron() {
    return (
        <div className="Jumbotron Jumbotron-fluid" 
        style={{backgroundImage: "url(" + earth + ")",
        width:" 100%", height: "250px", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        backgroundPosition: "0px -30px"
        }}>
        </div>
    )
}
