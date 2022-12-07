import React,{useState,useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';


const Redirect_Page = () => {
  const id=useParams();
  // console.log(id);
  const [user,setUser]=useState([]);



  useEffect(()=>{


      getSingleUser(id);
    
  
  },[]);
  console.log(user)
  const getSingleUser=async (id)=>{
    const response=await axios.get(`http://localhost:9002/api/user/${id}`);
    console.log(response);
    if(response.status===200){
      setUser(response.data.data);
      console.log("test")
    }
  }


  return (
    <div style={{marginTop:"150px"}}>
      <div className='card'>
        <div className='card-header'>
          <p>User Contact Detail</p>
        </div>
      </div>
     <p style={{color:'white'}}>{user.name}</p>
    </div>
  )
}

export default Redirect_Page
