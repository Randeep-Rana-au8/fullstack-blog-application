import React, { useState, useEffect } from "react";
import Userdtails from "../../components/profile/Profile";
import axios from "axios";
import { setProfile } from "../../redux/actions/profileActions";
import { connect } from "react-redux";
import UserProfile from "../../components/profile/UserProfile";
import "./profilePage.css";

function ProfilePage({ setProfile }) {
  const [user, setuser] = useState("");
  console.log(user);
  useEffect(async () => {
    console.log(localStorage.getItem("jwt"));
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };
    const result = await axios.get("http://localhost:3001/myProfile", { headers });
    const data = result.data;
    console.log(result.data);
    setuser(data);
    setProfile(data);
  }, []);

  return <div className="profile">{user ? <UserProfile user={user} /> : "loading"}</div>;
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { setProfile })(ProfilePage);
