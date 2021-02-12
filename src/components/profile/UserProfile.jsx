import React, { useState } from "react";
import EditProfile from "./EditProfile";
import "./UserProfile.css";

const UserProfile = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  const handleClick = () => {
    setEditMode(true);
  };
  return (
    <div className="profileCard">
      {editMode ? (
        <EditProfile user={user} cancel={setEditMode} />
      ) : (
        <>
          <img src={user.profileImage} alt="user" />
          <h1>Username: {user.username}</h1>
          <h1>FirstName: {user.firstName}</h1>
          <h1>LastName: {user.lastName}</h1>
          <h2>Email: {user.email}</h2>
          <button onClick={handleClick} className="profileEditButton">
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
