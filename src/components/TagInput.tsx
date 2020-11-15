import '../../static/css/taginput.css'
import React, { useState } from 'react'
import type { HTMLAttributes, FocusEvent, KeyboardEvent } from 'react'

type PropsType = HTMLAttributes<HTMLDivElement> & {
  defaultTags?: string[]
}

/**
 * TODO: 支持回调输入的 Tag
 *
 * 打标签组件
 */
export default function TagInput(props: PropsType) {
  const { defaultTags = [] } = props

  const [tagData, setTagData] = useState(defaultTags)

  const removeTagData = (indexToRemove: number) => {
    setTagData([...tagData.filter((_, index) => index !== indexToRemove)])
  }

  const addTagData = (event: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
      setTagData([...tagData, event.target.value])
      event.target.value = ''
    }
  }

  return (
    <div className="tag-input" role={'tag-input'}>
      <ul id="tags">
        {tagData.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span className="tag-close-icon" onClick={() => removeTagData(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onBlur={e => addTagData(e)}
        onKeyUp={event => (event.key === 'Enter' ? addTagData(event) : null)}
        placeholder="Press enter or click blank point to add tags"
      />
    </div>
  )
}

/**
 * How to use?
 *
  <TagInput tags={['Hello', 'World']}/>
 */
