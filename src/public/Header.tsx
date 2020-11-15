/** @format */

import React from 'react'
import '../../static/css/header.css'

interface PropsType {}

export default function Header(props: PropsType) {
  return (
    <header className="bc-header">
      <div className="bc-container">
        <div className="bc-header-text-box">
          <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase text-white font-weight-bold">
              Listen to BriceChou. <br />
              No bug, no code, no one.
            </h1>
            <hr className="bc-divider"></hr>
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-bold mb-5">
              When you always be a beginner, great lives never go out.
            </p>
            <a className="btn btn-primary btn-xl" href="#">
              Start to explore
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
