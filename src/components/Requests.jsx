import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests } from '../utils/requestSlice'
import axios from 'axios'

const Requests = () => {
    const requests = useSelector((store => store.requests))
      const dispatch = useDispatch()


      const fetchRequests = async () => {
        try{
             const res = await axios.get(BASE_URL + "/user/requests/received",{    // api call
                withCredentials:true
            }) 
             
             dispatch(addRequests(res.data.data))
        }catch(err) {}
      };

      useEffect(()=>{
        fetchRequests()
      },[])


  if(!requests) return;

        
  if(requests.length === 0) return  <h1 className="text-bold text-2xl">No Requests Found</h1>

  return (
    <div className=" text-center my-10">
        <h1 className="text-bold text-white text-3xl">Connection Requests</h1>

        {requests.map((request) => {
          const {_id, firstName, lastName, photoUrl, age,gender, about} = request.fromUserId  // extract all and all the things comes from my connection and getting the data request.fromUserId


          return (
        <div key={_id} className="flex justify-between items-center m-4 p-4  rounded-lg bg-base-300 w-1/2 mx-auto">

            <div><img alt="photo" className ="w-20 h-20 rounded-full" src={photoUrl}/></div>

            <div className="text-left mx-4">
                  <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>

                  {age && gender && <p>{age + ", " + gender}</p>} 
                  <p>{about}</p>   
            </div>
               
            <div>
                <button className="btn btn-primary mx-2">Reject</button>
                <button className="btn btn-secondary mx-2">Accept</button>
            </div>

          </div>
        
        )})}
    </div>
  )
}


export default Requests


// note:

//  1.make a async function uner the function =>
//  2. api call 
//  3. Get the useDispatch Request function + dispatch a action after the api call in fetchRequets function
//  4. i will call the useEffect() function only once whne my page load in Requests function
//  5. Let us also create request url just like connection in Navbar.jsx
//  6. add a page in app store
//  7. Lets us add the user in ui or Read hte user request from redux store using use selector which get in or declare it in request function
//  8. as same as the connection
//  9. Then add two button named Reject and accept


