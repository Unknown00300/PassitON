import React from 'react'

import PropTypes from 'prop-types'

import './Navbar.css'

import {Link} from "react-router-dom";

const logo = require('./passitonlogo.png')


const NavigationLinks1 = (props) => {
  return (
  
      <div className="home-container">
        <header data-role="Header" className="home-header">
          <img
             src={logo}
            alt="image"
            className="home-image"
          />
          <div className="home-container1">
            
              <nav 
			  className="navigation-links1-nav navigation-links1-root-className-name15"
              >
                <Link className="navigation-links1-text" to="/uploadbook">
                  <span>SELL a Book</span>
                </Link>
                <Link className="navigation-links1-text1" to="/searchbook">
                  <span>SEARCH a Book</span>
                </Link>
                <Link className="navigation-links1-text2" to="/">
                  <span>Log Out</span>
                </Link>
              </nav>
          
           
          </div>
		  <Link to="/cart">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path
              d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"
            ></path>
          </svg>
		  </Link>
        </header>
				
		</div>

  )
}



export default NavigationLinks1
