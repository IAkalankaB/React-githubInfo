import React from "react";
import UserItem from "./UserItem";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";

const Users = ({users,loading})=> {
  if(loading){
    return <Spinner/>;
  }
  else{
    return (
      <div>
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
        </div>
          <p>
          <Link
            to="/links"
            className="btn-block text-center lead btn-dark my-3"
          >
            Click here for more information
          </Link>
          </p>
      </div>
    );
  }
}


const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Users
