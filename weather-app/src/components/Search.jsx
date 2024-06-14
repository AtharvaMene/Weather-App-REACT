import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Search = () => {
  const[search,setSearch]=useState("");
  const router = useNavigate();
  
  function handleSubmit(){
    router("/report-page");
  }
  function handleChange(event){
    setSearch(event.target.value)
   console.log(event.target.value)
  }
  console.log(search);
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
     <h1>Weather Forecast</h1>
     <input onChange={handleChange} name='search' type="text" /><br />
     <input type="submit" name="" id="" />
     </form>
    </div>
  )
}

export default Search
