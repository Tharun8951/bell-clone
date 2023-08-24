import React from 'react'
import '../Card/LeftCard.scss'
import bgimg from '../../../left-card-bg.jpg'

export default function LeftCard() {
  return (
    <div className="card-container">
      <div className="img">
        <img src={bgimg} alt="" />
      <div className="text-wrapper">
        <h4>Bell</h4>
        <h3>
          Experience
          <br />
          The #1
          <br />
          Life Style Advertising
        </h3>
        <h6>WE SHOUT OUT YOUR BRAND</h6>
        <div className="need-help">
            Need Help?
        </div>
      </div>
      </div>
    </div>
  )
}
