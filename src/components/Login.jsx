import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";



const Login = () => {
    
  const [emailId,setEmailId] = useState("") ;    // state variable
  const [password,setPassword] = useState("");
  const [firstName,setFirstName] = useState("")
  const [lastName,SetLastName] = useState("")
  const [isLoginForm, setIsLoginForm] = useState(true)  // its act like a switch change to login and sign from .True=Login & False=SignUp
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


 const handleSignUp = async()=>{
  try{ 

    const res = await axios.post(BASE_URL + "/signup",
       {firstName, lastName, emailId, password},    // passing this
       {withCredentials:true}
      )
    dispatch(addUser(res.data.data))
    return navigate("/profile")
  }catch(err){
    setError(err?.response?.data || "something went wrong")
  }
 }
  

  return ( // if it a login form then write Login else write signUp
    <div className='flex justify-center my-8 card bg-secondary w-80 shadow-lg text-primary-content border-2 border-pink-700 rounded-2xl'>
        
      <div className="card card-dash bg-info-content w-85">
      <div className="card-body">
      <h2 className="card-title  justify-center">{isLoginForm ? "Login" : "SignUp" }</h2>   

   <div > 

       
    { !isLoginForm  && (
        <> 
      <fieldset className="fieldset my-2">
        <legend className="fieldset-legend ">First tName</legend>
        <input 
        type="text" 
        value = {firstName}
        className="input"  
        onChange={(e)=> setFirstName(e.target.value)} 
        />
      </fieldset>

      <fieldset className="fieldset my-2">
        <legend className="fieldset-legend ">Last Name</legend>
        <input 
        type="text" 
        value = {lastName}
        className="input"  
        onChange={(e)=> SetLastName(e.target.value)} 
        />
      </fieldset> </>)} 
      
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
        type="password" 
        value = {password}
        className="input"  
        onChange={(e)=> setPassword(e.target.value)}
        /> 
      </fieldset>

   </div>


     <p className="text-red-900">{error}</p>   
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={isLoginForm? handleLogin: handleSignUp}>
       {isLoginForm? "Login": "SignUp"}</button>
    </div>
       <p className="m-auto cursor-pointer py-2" onClick={()=>setIsLoginForm((value) => !value) }>
      {isLoginForm
       ? "New User? SignUp Here"
       : "Existing User? Login Here"
      }</p>
  </div>
</div>
</div>
  )
}

export default Login