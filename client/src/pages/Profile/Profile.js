import React, { Component } from "react";
import Capture from "./Capture.PNG";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Post from "../../components/Post/Post";
import posts from "../../posts.json";
import "./style.css";
import API from "../../utils/API";

// import API from "../../utils/API";


class Profile extends Component {

    state = {
        posts,
        user: {},
        loggedIn: false
    }

    componentDidMount(){
        this.updateUser();
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


    render() {
        return (
            <div className="row" style={{ margin: "0px 0px 0px 30px", padding: "0px" }}>
                <div className="col-md-3 col-lg-3" style={{ paddingLeft: "118px" }}>
                    <div style={{ paddingTop: "16px" }}>
                        <img src={Capture} alt="user" />
                    </div>
                    <div style={{ marginTop: "8px" }}>
                        <span style={{ fontWeight: "bold" }}> {this.state.user.firstName} </span>
                        <span style={{ fontWeight: "bold" }}> {this.state.user.lastName} </span>
                        <span style={{ color: "#4040ff" }}>
                            <i className="fas fa-check-circle"></i>
                        </span>
                        <br />
                        <span style={{ fontSize: "12px" }}>@{this.state.user.lastName + this.state.user.firstName}</span>
                    </div>
                    <div>
                        <ul style={{ listStyleType: "none", padding: "5px" }}>
                            <li className="list-group-item-light">Home</li>
                            <li>About</li>
                            <li>Photos</li>
                            <li>Events</li>
                            <li>Welcome</li>
                            <li>Videos</li>
                            <li>Posts</li>
                            <li>Community</li>
                            <li>Info and ads</li>
                        </ul>
                    </div>
                    <div>
                        <button className="btn-success">
                            Create a Page
                        </button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="bg-white">
                        <Jumbotron />
                        <div className="row" style={{ padding: "8px 0px 8px 8px", fontSize: "12px" }}>
                            <div className="col">
                                <button className="btn-light"><i className="fas fa-thumbs-up"></i> Like</button>
                                <button className="btn-light"><i className="fas fa-share"></i> Share</button>
                                <button className="btn-light"><i className="fas fa-pencil-alt"></i> Suggest Edits</button>
                                <button className="btn-light"><i className="fas fa-ellipsis-h"></i></button>
                            </div>
                            <div className="col" style={{ marginLeft: "70px", paddingRight: "0px" }}>
                                <button className="ml-4" style={{ padding: "0px 15px", backgroundColor: "#3B5998", color: "white" }}>Learn More</button>
                                <button className="btn-light ml-2"><i className="fab fa-facebook-messenger"></i> Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        {this.state.posts.map(post => (
                            <Post
                                key={post.date}
                                userImage={post.userImage}
                                userName={post.userName}
                                date={post.date}
                                subject={post.subject}
                                postImage={post.postImage}
                                altImage={post.altImage}
                                reacted={post.reacted}
                                timesShared={post.timesShared}
                                numberOfComments={post.numberOfComments}
                            />
                        ))}
                    </div>
                    <div style={{ height: "50px" }}> </div>
                </div>
            </div>
        );
    };
};

export default (Profile);