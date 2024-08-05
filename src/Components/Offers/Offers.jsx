import React from 'react'
import './Offers.css'
import exclucive_image from '../Assest/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclucive</h1>
        <h1>Offer for You</h1>
        <p>Only on best seller products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
