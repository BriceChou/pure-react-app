import React, { memo } from 'react'
import type { ReactNode, HTMLAttributes } from 'react'

type PropsType = HTMLAttributes<HTMLDivElement> & {
  text: string
  children: ReactNode
}

/**
 * tooltips: https://getbootstrap.com/docs/4.5/components/tooltips/
 * popovers: https://getbootstrap.com/docs/4.5/components/popovers/
 *
 * 滑过后提示相关内容组件
 */
function ToolTip(props: PropsType) {
  const { children, text, ...rest } = props
  const [show, setShow] = React.useState(false)
  return (
    <>
      <div
        role="tooltip"
        style={{ visibility: show ? 'visible' : 'hidden' }}
        className={`tooltip fade bs-tooltip-top ${show ? 'show' : ''}`}>
        <div className="arrow" />
        <div className="tooltip-inner">{text}</div>
      </div>
      <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} {...rest}>
        {children}
      </div>
    </>
  )
}

export default memo(ToolTip, (prev: PropsType, next: PropsType) => prev.text === next.text)

/**
 * How to use?
 *
  <Tooltip text="Simple tooltip">
    <button>Hover me!</button>
  </Tooltip>
 */
