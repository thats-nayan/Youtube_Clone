import React, { useEffect, useState } from 'react'
import {  useParams} from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Videos from './Videos';


const SearchFeed = () => {
  const {searchTerm} = useParams();
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    
    fetch(`https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`, options)
      .then(response => response.json())
      .then(response => setVideos(response.items))
      .catch(err => console.error(err));
  },[searchTerm])

  return (
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          Search Results for : <span style={{ color: "#FC1503" }}>{searchTerm}</span>
        </Typography>

        <Videos videos = {videos}/>
      </Box>
  )
}

export default SearchFeed;