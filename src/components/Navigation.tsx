/** @format */

import React from 'react'

interface PropsType {}

export default function Navigation(props: PropsType) {
  // const {} = props
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            Listen to BriceChou
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#members">
                  Members
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#timeline">
                  History
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contacts">
                  Contacts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#links">
                  Links
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}
