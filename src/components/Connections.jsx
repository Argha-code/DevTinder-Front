import axios from 'axios'
import  { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { connect,useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'



// this my connection with people after accepted their request or if thet accept my request
const Connections = () => {
    const connections = useSelector((store) => store.connections)
    const dispatch = useDispatch()

    const fetchConnections = async() => {
        try{
     const res = await axios.get(BASE_URL + "/user/connections",{withCredentials:true})

     
    //  console.log(res.data.data)  // getting the connection in console
     dispatch(addConnections(res.data.data))   // store in my Rdux Store
        }catch(err){
            
        }
    }

  // I will call this function whwn my page load 
  useEffect(()=>{
    fetchConnections()
  },[]);

  if(!connections) return;

        
  if(connections.length === 0) return  <h1 className="text-bold text-2xl">No Connections Found</h1>

  return (
    <div className=" text-center my-10">
        <h1 className="text-bold text-white text-3xl">Connections</h1>

        {connections.map((connection) => {
          const {firstName, lastName, photoUrl, age,gender, about} = connection  // extract all and all the things comes from my connection


          return (
        <div className="flex m-4 p-4  rounded-lg bg-base-300 w-1/2 mx-auto">

            <div><img alt="photo" className ="w-20 h-20 rounded-full" src={photoUrl}/></div>

            <div className="text-left mx-4">
                  <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>

                  {age && gender && <p>{age + ", " + gender}</p>} 
                  <p>{about}</p>   
            </div>
            
          </div>
        
        )})}
    </div>
  )
}

export default Connections


// Note
 // age and gender show when it available