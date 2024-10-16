import React from 'react'
import Navbar from '../Navbar/Navbar'

import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="button">
          <button type="button" className="btn">
            Log in
          </button>
          <button type="button" className="btn">
            Whitepaper
          </button>
        </div>
        <div className="cta">
          <div className="container">
            <h1 className="heading">
              When Innovation Meets <span className="span">investment</span>
            </h1>
            <p className="p">Empowering Trading Through advanced Technology</p>
            <div className="info">
          <button className="btn1">
           Open dApp
          </button>
        </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
