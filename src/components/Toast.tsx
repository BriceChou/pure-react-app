import React, { useState, useEffect } from 'react'

interface PropsType {
  title?: string
  message: string
  timeout?: number
  subTitle?: string
  visable?: boolean
}

/**
 * https://getbootstrap.com/docs/4.5/components/toasts/
 *
 * 气泡提示
 */
export default function Toast(props: PropsType) {
  const { title = '', subTitle = '', message = '', timeout = 3000 } = props

  const [shown, setShown] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => setShown(false), timeout)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      className="d-flex justify-content-center align-items-center"
      style={{ visibility: shown ? 'visible' : 'hidden' }}
      onClick={() => setShown(false)}>
      <div className={`toast fade ${shown ? 'show' : ''}`} aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          {/* <img src="..." className="rounded mr-2" alt="..." /> */}
          <strong className="mr-auto">{title}</strong>
          <small>{subTitle ? subTitle : ''}</small>
          <button
            type="button"
            aria-label="Close"
            data-dismiss="toast"
            className="ml-2 mb-1 close"
            onClick={() => setShown(false)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">{message}</div>
      </div>
    </div>
  )
}

/**
 * How to use?
 *
 * <Toast message="helo bricechou" title="tips" subTitle="just now" />
 */
