import type { MouseEvent } from 'react'
import React, { useState } from 'react'

interface PropsType {
  value?: number
}

const Star = ({ marked, starId }: { marked: boolean; starId: number }) => {
  return (
    <span star-id={starId} style={{ color: '#ff9933' }} role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  )
}

/**
 * TODO: 回传打分结果
 *
 * StarRating 评分组件
 */
export default function StarRating(props: PropsType) {
  const { value = 0 } = props
  const [rating, setRating] = useState(value)
  const [selection, setSelection] = useState(0)
  const hoverOver = (event: MouseEvent<HTMLDivElement>) => {
    let val = 0
    if (event && event.target && event.target.getAttribute('star-id')) val = event.target.getAttribute('star-id')
    setSelection(val)
  }
  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={event => setRating(event.target.getAttribute('star-id') || rating)}
      onMouseOver={hoverOver}>
      {Array.from({ length: 5 }, (v, i) => (
        <Star starId={i + 1} key={`star_${i + 1} `} marked={selection ? selection >= i + 1 : rating >= i + 1} />
      ))}
    </div>
  )
}

/**
 * How to use?
 *
  <StarRating value={2} />
 */
