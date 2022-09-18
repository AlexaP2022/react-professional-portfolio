import React from 'react';
import './header.scss';

export default function Navbar({setPage}) {
  return (
    <div className='navContainer'>
     <h1>Alexa Punzalan</h1>
        <div className='navbar'> 
            <ul className='navlinks'>
            <button onClick={()=>setPage("Intro")}>Intro</button>
            <button onClick={()=>setPage("Portfolio")}>Portfolio</button>
            <button onClick={()=>setPage("Work")}>Work</button>
            <button onClick={()=>setPage("Contact")}>Contact</button>
            </ul>
           
        </div>
    </div>
  )
}
