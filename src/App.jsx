import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Used for routing same as we did in Node JS
import Box from "@mui/material/Box"
// Same as div in html
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from "./components"



// sx prop is used for providing css to material ui elements
const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: "black" }}>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element = <Feed/> />
                    <Route path='/video/:id' exact element = <VideoDetail/> />
                    <Route path='/channel/:id' exact element = <ChannelDetail/>/>
                    <Route path='/search/:searchTerm' exact element = <SearchFeed/> /> 
                 </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App