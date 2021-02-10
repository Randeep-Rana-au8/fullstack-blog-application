import React,{useEffect} from 'react'
import axios from 'axios'


function Profile() {
    useEffect(async () => {
       console.log(localStorage.getItem("jwt"))
        const headers = {
            "Authorization":"Bearer "+localStorage.getItem("jwt")
              }
        const result = await axios.get("http://localhost:3001/myProfile",{headers});
        console.log(result)
       
    }, [])

    return (
        <div>
            <h1>profile Page</h1>
        </div>
    )
}

export default Profile
