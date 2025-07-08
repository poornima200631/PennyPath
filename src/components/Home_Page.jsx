import { useState } from 'react'
import '../CSS/Home_Page.css'
import Navbar from './Navbar';
// import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

function Home_Page() {
 
  
  return (
   <div >
     
    <Navbar/>
    <div className='content'>
      <div>
    <h2 className='headline'>Keep Track of your every Penny</h2>
   <h1 className='subhead'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Because every penny matters</h1>
</div>
  <img src="/images/people.png" className='img' />
  </div>
   </div>
  );
}




export default Home_Page;
