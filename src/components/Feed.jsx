import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import axios from 'axios'
import { BASE_URL } from "../utils/constant";
import UserCard from './UserCard';


const Feed = () => {

  const feed = useSelector((store) => store.feed)   // read the store
  // console.log(feed)
  const dispatch = useDispatch()

  const getFeed = async() => {
    if(feed) return;
    try{
      const res = await axios.get(BASE_URL + "/feed",{withCredentials:true})
    dispatch(addFeed(res?.data?.data))
  }catch(err){

  }
  }

  useEffect(() => {
   getFeed()
  },[])

  if(!feed)  return   // if feed become then return

  if(feed.length <= 0) return <h1 className="flex justify-center my-10">No new users found!</h1>


  return (
    feed && (   // if my feed is present then only load my card
    
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]} />
    </div>
    )
  )
}

export default Feed  