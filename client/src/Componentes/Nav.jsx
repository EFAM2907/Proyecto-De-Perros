import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import  'bootstrap'
import {Link} from 'react-router-dom'
import s from '../styles/Nav.module.css'
import image from '../image/edwin.jpg'



export default function Nav() {
return(
<div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   <Link to={'/perfil'}>
   <img src= {image} alt='User Profile' className={s.avatar} />

   </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/create'>Crear</Link>
        </li>
      </ul>
      <span className="navbar-text">
      Una App Para Admirar la Variedad de Dogs 🦴
      </span>
    </div>
  </div>
</nav>
        
</div>
    
)
  
  
}




