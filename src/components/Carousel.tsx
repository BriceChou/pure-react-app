import type { ReactNode } from 'react'
import React, { cloneElement, useState, useEffect } from 'react'

type PropsType = {
  carouselItems: ReactNode[]
}

/**
 * https://getbootstrap.com/docs/4.5/components/carousel/
 *
 * 轮播组件 | 需要进行左右优化切换
 */
export default function Carousel(props: PropsType) {
  const { carouselItems = [], ...rest } = props

  const [active, setActive] = useState(0)

  useEffect(() => {
    const scrollInterval = setTimeout(() => {
      setActive((active + 1) % carouselItems.length)
    }, 2000)
    return () => clearTimeout(scrollInterval)
  })

  return (
    <div className="carousel slide" role="carousel">
      <div className="carousel-inner">
        {carouselItems.map((item, index) => {
          const activeClass = active === index ? 'active' : ''
          return (
            <div key={`${index}`} className={`carousel-item ${activeClass}`}>
              {cloneElement(item, { ...rest, className: 'd-block' })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/**
 * How to use?
 *
  <Carousel
    carouselItems={[
      <div>carousel item 1</div>,
      <div>carousel item 2</div>,
      <div>carousel item 3</div>
    ]}
  />
 */
