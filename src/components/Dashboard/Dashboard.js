import React, {Component} from "react";
import Login from "../Login/Login";
import ChatRoom from "../ChatRoom/ChatEngine";

class Dashboard extends Component {

    render() {
        if (!sessionStorage.getItem('name')) {
            return <Login />
        }
        return <ChatRoom/>
    }
}

export default Dashboard;