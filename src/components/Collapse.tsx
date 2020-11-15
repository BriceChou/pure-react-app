import '../../static/css/collapse.css'
import type { ReactNode } from 'react'
import React, { memo, useState } from 'react'

interface PropsType {
  collapsed?: boolean
  children: ReactNode
}

/**
 * https://getbootstrap.com/docs/4.5/components/collapse/
 *
 * 隐藏/加载更多组件
 */
function Collapse(props: PropsType) {
  const { collapsed = true, children } = props
  const [isCollapsed, setIsCollapsed] = useState(collapsed)
  return (
    <>
      <button className="collapse-button" onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? 'Show' : 'Hide'} content
      </button>
      <div className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`} aria-expanded={isCollapsed}>
        {children}
      </div>
    </>
  )
}

export default memo(Collapse, (prev: PropsType, next: PropsType) => prev.collapsed === next.collapsed)

/**
 * How to use?
 *
  <Collapse>
    <h1>This is a collapse</h1>
    <p>Hello world!</p>
  </Collapse>
 */
