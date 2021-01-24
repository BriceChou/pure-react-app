import type { ReactNode } from 'react'
import React, { useState } from 'react'

interface PropsType {
  defaultIndex: number
  children: ReactNode[]
  onItemClick: (itemIndex: number) => void
}

interface ItemPropsType {
  label: string
  children: ReactNode
  isCollapsed: boolean
  handleClick: () => void
}

function AccordionItem(props: ItemPropsType) {
  const { label, isCollapsed, handleClick, children } = props
  return (
    <>
      <button className="accordion-button" onClick={handleClick}>
        {label}
      </button>
      <div className={`accordion-item ${isCollapsed ? 'collapsed' : 'expanded'}`} aria-expanded={isCollapsed}>
        {children}
      </div>
    </>
  )
}

/**
 * https://getbootstrap.com/docs/4.5/components/collapse/#accordion-example
 *
 * 手风琴折叠组件
 */
function Accordion(props: PropsType) {
  const { defaultIndex, onItemClick, children } = props
  const [bindIndex, setBindIndex] = useState(defaultIndex)

  const changeItem = (itemIndex: number) => {
    if (typeof onItemClick === 'function') onItemClick(itemIndex)
    if (itemIndex !== bindIndex) setBindIndex(itemIndex)
  }

  // @ts-ignore
  const items = children.filter(item => item.type.name === 'AccordionItem')

  return (
    <>
      {items.map(item => {
        const {
          // @ts-ignore
          props: { label, children, index },
        } = item
        return (
          <AccordionItem
            label={label}
            children={children}
            isCollapsed={bindIndex !== index}
            handleClick={() => changeItem(index)}
          />
        )
      })}
    </>
  )
}

export { AccordionItem, Accordion as default }

/**
 * How to use?
 *
  <Accordion defaultIndex="1" onItemClick={console.log}>
    <AccordionItem label="A" index="1">
      Lorem ipsum
    </AccordionItem>
    <AccordionItem label="B" index="2">
      Dolor sit amet
    </AccordionItem>
  </Accordion>
 */
