import React, {useState} from 'react'
import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./homepage.css";
import Spinner from "../../componets/spinner/spinner";


function Hometest() {
  const [posts, setPosts] = useState('')
    useEffect(() => {
        async function fetchData() {
          const result = await axios.get("http://localhost:5000/allpost");
          console.log(result.data)
          const posts = Object.assign({}, result.data)
          console.log(posts)
          setPosts(posts)
        }
        fetchData();
      }, []);
      console.log(posts)
    return (
      
        <div>
          {
          posts.map(post=>{
            return(
              <img src={post.imageUrl}/> 
            )
          })
          } 
           
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
  
