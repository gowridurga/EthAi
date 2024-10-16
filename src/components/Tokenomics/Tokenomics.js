import {Component} from 'react'

import './Tokenomics.css'

const Tokenomics = () => {
  return (
    <div className="toke-container">
      <div className="cta">
        <h1 className="h">Tokenomics</h1>
        <img
          className="blogimg"
          src="https://res.cloudinary.com/djkrastjv/image/upload/v1729029545/Donut_rverfk.png"
        />
        <div className="toke">
          <div className="tokecard">
            <p className="p1">Name : EthAi</p>
            <p className="p1">Token Name : $EthAi</p>
            <p className="p1">Token standard : ERC20</p>
            <p className="p1">Blockchain : Ethereum</p>
            <p className="p1">Total Suppiy : 100 Million</p>
            <p className="p1">tex : 5%/5%</p>
          </div>
          <div className="teamcard">
            <p className="p1">Team : 35%</p>
            <p className="p1">Marketin : 5%</p>
            <p className="p1">Liquidity Pool : 90%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
