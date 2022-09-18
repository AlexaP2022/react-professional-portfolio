import React from 'react';
import './header.scss';

export default function Header({setPage}) {
  return (
    <div className='navContainer'>
     <h1>Alexa Punzalan</h1>
        <div className='navbar'> 
            <ul className='navlinks'>
            <button onClick={()=>setPage("Intro")} className= 'btn btn-outline mr-1'>Intro</button>
            <button onClick={()=>setPage("Portfolio")}className= 'btn btn-outline mr-1'>Portfolio</button>
            <button onClick={()=>setPage("Work")}className= 'btn btn-outline mr-1'>Work</button>
            <button onClick={()=>setPage("Contact")}className= 'btn btn-outline mr-1'>Contact</button>
            </ul>
        </div>
    </div>
  )
}
