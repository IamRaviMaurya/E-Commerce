import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get exclucive offer on email</h1>
      <p>Subscribe to our news letter and stay update</p>
      <div>
        <input type="email" placeholder='Your E- Mail Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
