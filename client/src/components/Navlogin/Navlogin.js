import React from 'react'
// import {withRouter} from "react-router"

export default function Navlogin(props) {
    return (
        <div>
            <form onSubmit={props.loginOnClick} className="form-inline">
                <div className="form-group">
                    <input 
                        style = {{width: "200px", height: "30px", marginRight: "8px"}}
                        value={props.email}
                        onChange = {props.handleInputChange}
                        name="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <input 
                        style={{width: "200px", height: "30px", marginRight: "8px"}}
                        type="password"
                        value={props.password}
                        onChange={props.handleInputChange}
                        name="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit" style={{ float: "right", marginRight: "50px" }} className=" btn-success">
                    Log In
                    </button>
                </div>
            
            </form>
        </div>
    )
}
