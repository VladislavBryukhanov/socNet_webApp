import React, { Component } from 'react';
import Rooms from '../Pages/rooms';
import Chat from '../Pages/chat';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { signOut } from '../Components/authorization'
import EditProfile from '../Pages/editProfile';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/chat_list">|Home|</Link>
                <Link to="/edit_profile">[{this.props.profile.username}]</Link>
                <img src={`${this.props.serverIp}/${this.props.profile.avatar}`} width="100px"/>
                <button onClick={signOut}>Log out</button>
                <hr/>
                <Switch>
                    <Route path="/chat_list" component={Rooms}/>
                    <Route path="/edit_profile" component={EditProfile}/>
                    <Route path="/chat/:roomId" component={Chat}/>
                    <Redirect from='/' to='/chat_list'/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    serverIp: state.serverIp
});

export default connect (
    mapStateToProps
)(NavBar);