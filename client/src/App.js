import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from  "./pages/Landing/Landing";
import NoMatch from "./pages/NoMatch/NoMatch";
import API from "./utils/API";
import axios from "axios";


class App extends Component {

  state = {
    user: {},
    email: "",
    password: "",
    loggedIn: false,
    error: null
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  updateUser = () => {
    API.getCurrentUser()
      .then((res) => {
        this.setState({
          user: res.data.user,
          loggedIn: true
        })
      })
      .catch(err => { console.log(err) });
  };

  loginOnClick = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    axios.post("/auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        if (res.data.success) {
          this.updateUser();
        }
        if (res.data.error) {
          this.setState({
            error: res.data.error
          });
        }
      })
      .catch(err => console.log(err));
  };

  logoutOnClick = () => {
    axios.get("/auth/logout")
      .then(res => {
        localStorage.removeItem("jwtToken");
        this.setState({
          user: {},
          loggedIn: false
        });
        window.location.reload();
      })
      .catch(err => {
        console.log(err)
      });
  };


  render() {
    return (
      <Router>
        <div>
          <Navbar
            user={this.state.user}
            email={this.state.email}
            password={this.state.password}
            loggedIn={this.state.loggedIn}
            handleInputChange={this.handleInputChange}
            loginOnClick={this.loginOnClick}
            logoutOnClick={this.logoutOnClick}
            error={this.state.error}
          />
        </div>
        <Switch>
          <Route exact path ="/" component={Landing} />
          <Route component ={NoMatch} /> */}
        </Switch>
      </Router>
    );
  };
};

export default App;
