import React from "react";
import Landing from "../Landing/Landing";
import Profile from "../Profile/Profile";

export default function Home(props) {
    return (
        <div>
            {(props.loggedIn) ? 
            <Profile /> : <Landing />
        }
        </div>
    )
}
