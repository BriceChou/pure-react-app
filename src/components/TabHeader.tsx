import '../../static/css/tab.css'
import React, { useState } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'

interface PropsType {
  children: ReactNode
  defaultIndex: number
  onTabClick: (newIndex: number) => void
}

interface ItemPropsType {
  index: number
  label: string
}

function TabItem(props: ItemPropsType & HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />
}

/**
 * 用于切换的 TAB 组件
 */
function TabHeader(props: PropsType) {
  const { defaultIndex = 0, onTabClick, children = [] } = props

  const [bindIndex, setBindIndex] = useState(defaultIndex)
  const changeTab = (newIndex: number) => {
    if (typeof onTabClick === 'function') {
      onTabClick(newIndex)
    }
    setBindIndex(newIndex)
  }

  // @ts-ignore
  const items = children.filter(item => item.type.name === 'TabItem')

  return (
    <div className="wrapper">
      <div className="tab-menu">
        {items.map(
          ({ props: { index, label } }: { props: ItemPropsType }): ReactNode => (
            <button
              key={`${index}/${label}`}
              onClick={() => changeTab(index)}
              className={bindIndex === index ? 'focus' : ''}>
              {label}
            </button>
          ),
        )}
      </div>
      <div className="tab-view">
        {items.map(({ props }: { props: ItemPropsType }) => (
          <div
            {...props}
            className="tab-view_item"
            key={`${props.index}_${props.label}`}
            style={{ display: bindIndex === props.index ? 'block' : 'none' }}
          />
        ))}
      </div>
    </div>
  )
}

export { TabItem, TabHeader as default }

/**
 * How to use?
 *
  <Tabs defaultIndex="1" onTabClick={console.log}>
    <TabItem label="A" index="1">
      Lorem ipsum
    </TabItem>
    <TabItem label="B" index="2">
      Dolor sit amet
    </TabItem>
  </Tabs>
 */
