/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
//import Users from './Users';

class UserItem extends Component {

  // state = {
  //   id:'1',
  //   name:'Isuru Bandaranayake',
  //   avatar_url:'https://avatars3.githubusercontent.com/u/38803419?s=400&u=524619c0cc4c7915fc487b8d67fd579e6f460979&v=4',
  //   html_url:'https://github.com/Isuru1995',
  // }
  
  
  render() {

    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h5>{login}</h5>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            Profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
