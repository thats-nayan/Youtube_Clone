
import { Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [topic,changeTopic] = useState("");
  const navigate = useNavigate();
  function handleChange(event) {
    changeTopic(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if(topic)
    {
      changeTopic("");
      navigate(`/search/${topic}`);
    }
  }
  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        onChange = {handleChange}
        value = {topic}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar