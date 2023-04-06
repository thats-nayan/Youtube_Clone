import React from 'react'
import { useState,useEffect} from 'react'
import {Box} from "@mui/material"
import {useParams} from "react-router-dom"
import ChannelCard from './ChannelCard'
import Videos from './Videos'

const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail,setChannelDetail] = useState(null);
  const [channelVideos,setVideos] = useState([]);
  console.log(channelDetail,channelVideos);
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${id}`, options)
      .then(response => response.json())
      .then(response => setChannelDetail(response?.items[0]))
      .catch(err => console.error(err));

    fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`, options)
	.then(response => response.json())
	.then(response => setVideos(response?.items) )
	.catch(err => console.error(err));

  },[id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail