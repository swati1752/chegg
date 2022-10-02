import React from 'react'

const Navbar = () => {
  return (
    <div>    
    <nav>
    <div class="logo">
       Thothscripts
    </div>
    <input type="checkbox" id="click"/>
    <label for="click" class="menu-btn">
    <i class="fas fa-bars"></i>
    </label>
    <ul>
       <li><a href="/">Home</a></li>
       <li><a href="#">Courses</a></li>
       <li><a href="https://transcendent-meerkat-dbee4d.netlify.app">Quiz</a></li>
       <li><a href="https://shivika-chat-app.herokuapp.com/" target='blank'>Ask a Doubt</a></li>
       <li><a href="/about">About</a></li>
       <li><a href='#'>Contact</a></li>
    </ul>
 </nav>
 <div class="content">
    <div>
       Welcome to the learning hub. 
    </div>
    <div>
       Learn.Improve.Improvise
    </div>
 </div>
 </div>
  )
}

export default Navbar