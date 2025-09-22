import React, { use } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'
import { removeUser } from '../utils/userSlice'


const NavBar = () => {
// adding the photo in the navbar or subcribe the store whiche stre read the data and put my photo in the navbar
const user = useSelector((store)=>store.user)   
// console.log(user)
const dispatch = useDispatch() // we need dispatch a action to remove the user from the redux store
const navigate = useNavigate()    

  const handleLogout = async() =>{
      
    // API call for logout
    try{ 
       await axios.post(BASE_URL + "/logout",{},{withCredentials: true})
       // clear the data from the redux store
       dispatch(removeUser())
       return navigate("/login")
     
    }catch(err){
     // Error logic maybe redirect to the error page 

    }
  }
  return (
     <div className="navbar bg-base-950 shadow-sm ">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
  </div>

   {user && (
  <div className="flex gap-2">
    <div className="form-control">Welcome, {user.firstName}</div>
      <div className="dropdown dropdown-end mx-5 flex " >
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="user photo"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to= "/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li>
          <a onClick={handleLogout}>Logout</a>
          </li>
      </ul>
    </div>


  </div>)}
</div>
  )
}

export default NavBar