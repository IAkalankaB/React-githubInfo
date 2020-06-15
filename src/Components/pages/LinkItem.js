/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
//import Links from "./Links";
//import Users from './Users';

class LinkItem extends Component {

  // state = {
  //   id:'1',
  //   name:'Isuru Bandaranayake',
  //   avatar_url:'https://avatars3.githubusercontent.com/u/38803419?s=400&u=524619c0cc4c7915fc487b8d67fd579e6f460979&v=4',
  //   html_url:'https://github.com/Isuru1995',
  // }
  
  
  render() {

    const { name, avatar_url, fb_url, lnkd_url, info } = this.props.link;

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h5>{name}</h5> 
        <div>
          <a href={fb_url} className="btn btn-dark btn-sm my-1">
            Facebook
          </a>
          <a href={lnkd_url} className="btn btn-dark btn-sm my-1">
            Linkedin
          </a>
          <ul>
            <li>School     : {info[0]}</li>
            <li>University : {info[1]}</li>
            <li>Email      :<a>{info[2]}</a></li>
          </ul>  
        </div>
      </div>
    );
  }
}

export default LinkItem;
