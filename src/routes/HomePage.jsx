import React, {useState} from 'react';
import Header from '../Header'
import CardList from '../CardList'
import {Outlet} from "react-router-dom"

function HomePage () {
    const [searchTerm , setsearchTerm] = useState('')

    function onSearchChange(e)
    {
        setsearchTerm(e.target.value)
    }
  

  return (
    <div>
       
      <div classname='header-div'>
      <Header 
      text = "Website for login & Registration"
    />

    <input
    onChange = {onSearchChange}
    type="text"
    placeholder = "search staff"
    value = {searchTerm}
    />
      </div>
 
   <CardList 
    searchStaff= {searchTerm}
    />
     <Outlet />
    </div>
  );

}
export default HomePage;