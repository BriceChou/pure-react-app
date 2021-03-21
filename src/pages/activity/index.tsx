import React from 'react'
import '@css/app.css'

interface PropsType {}

export default function Activity(props: PropsType) {
  return (
    <div className="activity">
      <div
        onClick={e => {
          window.location.href = 'https://picsum.photos/520/360/?random'
        }}>
        <img src="https://picsum.photos/520/360/?random" />
      </div>
      <div className="test">
        <p>邀请好xxxx有限xxx</p>
      </div>
      <div>
        <article>
          ss <p>xxxx</p>
        </article>
      </div>
    </div>
  )
}
