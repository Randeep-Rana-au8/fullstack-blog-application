import React, { useState } from "react";

const EditProfile = ({ user, cancel }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const handleClick = () => {
    cancel(false);
  };
  return (
    <div>
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} value={username} />
      </div>
      <div>
        <label for="firstname">FirstName</label>
        <input type="text" id="firstname" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
      </div>
      <div>
        <label for="lastname">LastName</label>
        <input type="text" id="lastname" onChange={(e) => setLastName(e.target.value)} value={lastName} />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <button onClick={handleClick}>Cancel</button>
    </div>
  );
};

export default EditProfile;
