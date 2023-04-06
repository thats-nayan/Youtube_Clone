import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { SideBar } from '.';
import Videos from './Videos';


const Feed = () => {
  const [item,setItem] = useState("New");
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    
    fetch(`https://youtube-v31.p.rapidapi.com/search?q=${item}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`, options)
      .then(response => response.json())
      .then(response => setVideos(response.items))
      .catch(err => console.error(err));
  },[item])

  function changeTopic(newValue) {
    setItem(newValue);
  }
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid ", px: { sx: 0, md: 2 } }}>
        <SideBar passValue = {changeTopic}/>
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {item} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos = {videos}/>
      </Box>
    </Stack>
  )
}

export default Feed;