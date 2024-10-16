import React from 'react'

import './Topics.css'

const Topics = () => {
  return (
    <div className="bg-container">
      <div>
        <div className="card">
          <h1 className="h">Trade Optimizer</h1>
          <p className="color">
            Find the right moments to buy or sell, with personalized trade
            suggestions designed to help you make the most of every opportunity.
          </p>
        </div>
      </div>
      <div>
        <div className="card">
          <h1 className="h">Market Insight</h1>
          <p className="color">
            Stay ahead of the market. Get real-time updates on market trends,
            track top traders' movements, and spot signals from key influencers.
          </p>
        </div>
      </div>

      <div>
        <div className="card">
          <h1 className="h">Risk Guard</h1>
          <p className="color">
            Get alerts on market swings and potential risks before they impact
            your portfollo This agent helps you navigate volatility and stay
            prepared for anything.
          </p>
        </div>
      </div>
      <div>
        <div className="card">
          <h1 className="h">Portfolio Sync</h1>
          <p className="color">
            Easily manage your portfolio. You'll always know what you own, how
            it's performing, and where it's headed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Topics
