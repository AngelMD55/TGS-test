import React, { Component } from "react";
import SignUp from "../../components/Signup/Signup";
import API from "../../utils/API";
import introInfo from "../../intro.json";
import Intro from "../../components/Intro/Intro";

class Landing extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        introInfo,
        user: {}
    }

    signUpOnClick = (firstName, lastName, email, password) => {
        API.createUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
            .then(() => {
                this.setState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="row justify-content-around" style={{ margin: "0px 0px 0px 30px", padding: "20px 0px", backgroundColor: "#edf0f5",   height: "88vh"}}>
                <div className="col-md-6 col-lg-6" style={{ display: "inline-block", paddingLeft:"118px" }} >
                    <h2 style={{ padding: "42px 0px 24px" }}>
                        Connect with friends and the
                    <br />
                        world around you on Fakebook.
                    </h2>
                    {this.state.introInfo.map(introinfo => (
                        <Intro
                            key = {introinfo.name}
                            name = {introinfo.name}
                            image={introinfo.image}
                            bold={introinfo.bold}
                            reg={introinfo.reg}
                        />
                    ))}
                </div>
                <div className="col-md-6 col-lg-6 pl-0 m-0" style={{ display: "inline-block" }}>
                    <SignUp
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        password={this.state.password}
                        handleInputChange={this.handleInputChange}
                        signUpOnClick={this.signUpOnClick}
                    />
                </div>
            </div>
        );
    };
};

export default (Landing);