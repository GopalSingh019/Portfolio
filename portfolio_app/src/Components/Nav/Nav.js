import React, { useState } from 'react'
import './nav.css';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import TopicIcon from '@mui/icons-material/Topic';


function Nav() {

  const [active,setActive]=useState('');

  return (
    <div>
        <nav>
        <a href='#' className={(active==='#')?'active':''} onClick={()=>{
          setActive('#');
        }}><HomeIcon></HomeIcon></a>
        <a href='#about' className={(active==='#about')?'active':''} onClick={()=>{
          setActive('#about');
        }}><PersonOutlinedIcon/></a>
        <a href='#experience' className={(active==='#experience')?'active':''} onClick={()=>{
          setActive('#experience');
        }}><BookOutlinedIcon/></a>
        <a href='#portfolio' className={(active==='#portfolio')?'active':''} onClick={()=>{
          setActive('#portfolio');
        }}><TopicIcon/></a>
        <a href='#contact' className={(active==='#contact')?'active':''} onClick={()=>{
          setActive('#contact');
        }}><MessageIcon/></a>
        </nav>
    </div>
  )
}

export default Nav