import React from 'react'

import './Blog.css'

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="cta">
        <h1 className="h">Roadmap</h1>
        <div className="blog">
          <img
            className="imgsize"
            src="https://res.cloudinary.com/djkrastjv/image/upload/v1729032498/Background_zlos0p.png"
          />
          <div>
            <img
              className="imgbigger"
              src="https://res.cloudinary.com/djkrastjv/image/upload/v1729032484/Frame_25_gg7my2.png"
            />
          </div>
          <img
            className="imgfull"
            src="https://res.cloudinary.com/djkrastjv/image/upload/v1729032477/Frame_33_k7jeot.png"
          />
        
</div>
        <div className="frequently">
          <div className="fq">
            <h1 className="f">Frequentiy Questions</h1>

            <div class="faq-box">
              <li>
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                  color="#fff"
                  fill="none"
                >
                  <path
                    d="M12 4V20M20 12H4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{' '}
                <span className="s">What is EthAi?</span>
              </li>
              <li>
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                  color="#fff"
                  fill="none"
                >
                  <path
                    d="M12 4V20M20 12H4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="s">
                  How can EthAi can help me as a Trader?
                </span>
              </li>
              <li>
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                  color="#fff"
                  fill="none"
                >
                  <path
                    d="M12 4V20M20 12H4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="s">who can use EthAi?</span>
              </li>
              <li>
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                  color="#fff"
                  fill="none"
                >
                  <path
                    d="M12 4V20M20 12H4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="s">
                  How does EthAi track smart money flow?
                </span>
              </li>
              <li>
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                  color="#fff"
                  fill="none"
                >
                  <path
                    d="M12 4V20M20 12H4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{' '}
                <span className="s">How does ensure data security?</span>
              </li>
            </div>
             
          </div>
        </div>

       <div className="explore">
       <div className="ex">
          <h1 className="h">
            Explore Our <span className="app">dApp</span>
          </h1>
          <p className="p1">
            Ethai is an Al-powered dApp designed to help traders make smarter,
            data-driven decisions. By tracking smart money flows, monitoring key
            wallets, and providing real-time market insights, EthAi empowers
            users to stay ahead of trends. The platform offers intuitive Al
            features for asset recommendations, market analysis, and
            personalized crypto Q&A, making it the ultimate tool for both novice
            and experienced traders.
          </p>
           <div className="info">
          <a href="#" className="btn1">
            Read more
          </a>
        </div>
        </div>
          </div>
        </div>
      </div>
   
  )
}

export default Blog
