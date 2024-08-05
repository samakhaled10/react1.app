import React from 'react'
import avatarLogo from '../../assets/images/avatar.svg';
export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-emerald-600'>
    
      <img src={avatarLogo} alt="avatar" width="300"/>
      
        <h1 className='p-2 text-3xl font-bold text-white ' >START FRAMEWORK</h1>
    
        <div className="flex items-center">
  <div className="line bg-white w-20 h-1"></div>
  <i className="fa-solid fa-star mx-2 text-white"></i>
  <div className="line bg-white w-20 h-1"></div>
  
</div>
<div className="word p-2 text-white">
    <h5>Graphic Artist - Web Designer - Illustrator</h5>
  </div>
       
    </div>

  )
}
