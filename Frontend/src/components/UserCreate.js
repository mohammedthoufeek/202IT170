import React from 'react'
import './UserCreate.css'

const UserCreate = () => {
  return (
    <div  className='User'>
      <h3>Enter Your Company:</h3>
      <input className='input' placeholder='Enter your Company' />
      <h3>Enter Your Name:</h3>
      <input className='input' placeholder='Enter your Name' />
      <h3>Roll No:</h3>
      <input className='input' type='number'/>
      <h3>Email:</h3>
      <input className='input' type='mail'/>
      <h3>Access Code:</h3>
      <input className='input' type='code'/>
      
    </div>
  )
}

export default UserCreate