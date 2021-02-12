import React, { useState } from "react";
import "./EditProfile.css";
import axios from "axios";

const EditProfile = ({ user, cancel }) => {
  //   console.log(user);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const handleCancel = () => {
    cancel(false);
  };

  const handleUpdate = async () => {
    console.log("updating");
    const result = await axios.put(`http://localhost:3001/user/update/${user._id}`, {
      username,
      email,
      firstName,
      lastName,
    });
    console.log(result);
  };
  return (
    <div className="edit">
      <h1>Update Profile</h1>
      <br />
      <div className="labelInput">
        <label for="username">Username</label>
        <input
          disabled={true}
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="labelInput">
        <label for="firstname">FirstName</label>
        <input type="text" id="firstname" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
      </div>
      <div className="labelInput">
        <label for="lastname">LastName</label>
        <input type="text" id="lastname" onChange={(e) => setLastName(e.target.value)} value={lastName} />
      </div>
      <div className="labelInput">
        <label for="email">Email</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <br />
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditProfile;
