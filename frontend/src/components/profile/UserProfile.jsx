import React from "react";
import "./UserProfile.css";

const UserProfile = ({ user }) => {
  console.log(user);
  return (
    <div className="profileCard">
      <img src={user.profileImage} alt="user" />
      <h1>Username: {user.username}</h1>
      <h1>
        Name: {user.firstName} {user.lastName}
      </h1>
      <h2>Email: {user.email}</h2>
      <button className="profileEditButton">Edit</button>
    </div>
  );
};

export default UserProfile;
