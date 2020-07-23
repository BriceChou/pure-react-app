/** @format */

import React from 'react'
import '../../static/css/loading.css'

interface PropsType {}

export default function Loading(props: PropsType) {
  return (
    <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="object" id="object_one"></div>
          <div className="object" id="object_two"></div>
          <div className="object" id="object_three"></div>
          <div className="object" id="object_four"></div>
        </div>
      </div>
    </div>
  )
}
