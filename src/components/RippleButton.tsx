import '../../static/css/ripplebtn.css'
import type { ReactNode, MouseEvent } from 'react'
import React, { useEffect, useState } from 'react'

type PropsType = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}

/**
 * 水纹点击按钮组件
 */
export default function RippleButton(props: PropsType) {
  const { children, onClick } = props
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [isRippling, setIsRippling] = useState(false)

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 1200)
    } else setIsRippling(false)
  }, [coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])

  return (
    <button
      className="ripple-button"
      onClick={e => {
        var rect = e.target.getBoundingClientRect()
        var x = e.clientX - rect.left
        var y = e.clientY - rect.top
        setCoords({ x, y })
        onClick && onClick(e)
      }}>
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x + 10,
            top: coords.y,
          }}
        />
      ) : (
        ''
      )}
      <span className="content">{children}</span>
    </button>
  )
}

/**
 * How to use?
 *
  <RippleButton onClick={console.log}>Click me</RippleButton>
 */
