import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";



const Login = () => {
    
  const [emailId,setEmailId] = useState("akshay@gmail.com") ;  
  const [password,setPassword] = useState("Akshay@123");
  const [error,setError] = useState("")   // showing errror message and make it dynamic
  const dispatch = useDispatch()   // its a hook given by react redux
  const navigate = useNavigate()     // hook



 const handleLogin = async() => {  // handelling api call call for that reason make it async
  try{
       const res = await axios.post(
        BASE_URL + "/login",
        {
        emailId,password
      },{withCredentials :true}
    )
      
      dispatch(addUser(res.data))  // i dispatch the action and user data is store in the store
      return navigate("/")  // going to a "/" page after login
    
    } catch(err){
      setError(err?.response?.data || "something went wrong")  // getting from backend code
       
      }
 }
  

  return (
    <div className='flex justify-center my-8'>
        
      <div className="card card-dash bg-secondary w-85">
      <div className="card-body">
      <h2 className="card-title  justify-center">Login</h2>

   <div > 
      
      <fieldset className="fieldset my-2">
        <legend className="fieldset-legend ">Email Id</legend>
        <input 
        type="text" 
        value = {emailId}
        className="input"  
        onChange={(e)=> setEmailId(e.target.value)} 
        />
      </fieldset>

      <fieldset className="fieldset my-2">
        <legend className="fieldset-legend ">Password</legend>
        <input 
        type="text" 
        value = {password}
        className="input"  
        onChange={(e)=> setPassword(e.target.value)}
        /> 
      </fieldset>

   </div>


     <p className="text-red-900">{error}</p>   
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login