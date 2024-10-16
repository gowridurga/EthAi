import React from 'react'

import './Info.css'

const Info = () => {
  return (
    <div className="container1">
   <div className="cta">
        <h1 className="h">About EthAi</h1>
        <p className="p">
          At EthAl, we're all about making crypto trading easier and more
          Intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders' movements.
        </p>
        <div className="info">
          <a href="#" className="btn1">
            Read more
          </a>
        </div>
        
        <div className="info">
          <div>
            <div className="card1">
              <div>
                <img src="https://res.cloudinary.com/djkrastjv/image/upload/v1729025471/graph_njzrd1.png" />
                <h1 className="h1">Stay Ahead</h1>
                <p className="p1">
                  No more guesswork-get clear, trustable insights.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card1">
              <div>
                <img src="https://res.cloudinary.com/djkrastjv/image/upload/v1729025460/wallet_s3jxts.png" />
                <h1 className="h1">Know Your Assets</h1>
                <p className="p1">
                  Always stay on top of how your investments are performing.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card1">
              <div>
                <img src="https://res.cloudinary.com/djkrastjv/image/upload/v1729025451/Tools_goh8tf.png" />
                <h1 className="h1">Simple, Not Overwhelming</h1>
                <p className="p1">
                  Our tools are designed to make complex market analysis easy to
                  understand and act on.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card1">
              <div>
                <img src="https://res.cloudinary.com/djkrastjv/image/upload/v1729025441/Future_Technology_gzzvtr.png" />
                <h1 className="h1">Future-Proof</h1>
                <p className="p1">
                  We're constantly Improving, adding new features to help you
                  make the most Informed decisions possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Info
