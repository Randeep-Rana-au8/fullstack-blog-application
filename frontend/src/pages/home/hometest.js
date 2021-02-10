import React from 'react'
import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./homepage.css";
import Spinner from "../../componets/spinner/spinner";


function Hometest() {
    useEffect(() => {
        async function fetchData() {
          const result = await axios.get("http://localhost:5000/allpost");
          console.log(result.data.posts)
        }
        fetchData();
      }, []);
    return (
        <div>
            <img />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      state: state
    };
  };
  
  export default connect(mapStateToProps)(Hometest);
  
