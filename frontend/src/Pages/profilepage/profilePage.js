import React, { useState, useEffect } from "react";
import Userdtails from "../../components/profile/Profile";
import axios from "axios";
import { setProfile } from "../../redux/actions/profileActions";
import { connect } from "react-redux";
import UserProfile from "../../components/profile/UserProfile";
import "./profilePage.css";
import Spinner from "../../components/loaderSpinner/Spinner";

function ProfilePage({ setProfile }) {
  const [user, setuser] = useState("");
  const [post, setPost] = useState("");
  useEffect(async () => {
    console.log(localStorage.getItem("jwt"));
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };
    const result = await axios.get("http://localhost:3001/myProfile", { headers });
    const Posts = await axios.get("http://localhost:3001/mypost", { headers });
    const myPost = Posts.data.mypost[0]
    const data = result.data;
    setPost(myPost)
    setuser(data);
    setProfile(data);
  }, []);

  return (
      <div>
        <div className="profile">{user ? <UserProfile user={user} /> : "loading"}</div>
        {/* <Myposts post={post}/> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { setProfile })(ProfilePage);
