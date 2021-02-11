import React, {useState, useEffect} from 'react'
import Userdtails from "../../components/profile/Profile";
import axios from 'axios'
import { setProfile } from "../../redux/actions/profileActions";
import { connect } from "react-redux";

function ProfilePage({ setProfile }) {
    const [user, setuser] = useState('')
    var result = Object.keys(user).map((key) => [String(key), user[key]]);
    console.log(result)
    useEffect(async () => {
       console.log(localStorage.getItem("jwt"))
        const headers = {
            "Authorization":"Bearer "+localStorage.getItem("jwt")
              }
        const result = await axios.get("http://localhost:3001/myProfile",{headers});
        const data = result.data
        console.log(result.data)
        setuser(data)
        setProfile(data)
    }, [])
    
    return (
        <div>
            {/* {result.map((user) => (
                <Userdtails key={user} />
            ))} */}
            
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
      state: state,
    };
  };

export default connect(mapStateToProps, {setProfile})(ProfilePage);