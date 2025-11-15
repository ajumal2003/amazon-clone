import { IoLocation } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from 'react';
import img4 from '../assets/ExampleCarouselImage/amazon.png';


export default function Header1() {
  const[search,setSearch]=useState("");
  return (
    <>
      <header className='mainheader'>
        <div className='logo'>
          <img src={ img4 }/>
        </div>
        <div className='box2'>
          <div className='locationicon'>
          <IoLocation size={20}/>
          </div>
          <div className='delivery'>
          <p>delivery to</p>
          <p>update location</p>
          </div>
        </div>
        
      <div className='box3'>
        <input type='text' className='search' onChange={(e)=>setSearch(e.target.value)} placeholder="Search Amazon.in" value={search}></input>
        <button><IoIosSearch size={30} className='searchicon'/></button>
      </div>
      <div className='box4'>
        <p>hello sign in </p>
        <p>accounts and lists</p>
      </div>
      <div className='box5'>
        <p>returs </p>
        <p>&order</p>
      </div>
      <div className='box6'>
        <FaCartArrowDown size={30}/>
      </div>
    </header>
    </>  
  )
}
