import React, { useState, useEffect } from 'react'

interface PropsType {
  message: string
  visable: boolean
  timeout?: number
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'info'
}

/**
 * https://getbootstrap.com/docs/4.5/components/alerts/
 *
 * 提示条信息
 */
export default function Alert(props: PropsType) {
  const { visable = false, timeout = 250, type = 'primary', message = '' } = props

  let timeoutId = null
  const [isShown, setIsShown] = useState(visable)

  useEffect(() => {
    setIsShown(true)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [visable, timeout, timeoutId])

  const closeAlert = () => {
    timeoutId = setTimeout(() => {
      setIsShown(false)
    }, timeout)
  }

  return (
    <div className={`alert alert-${type} alert-dismissible fade ${isShown ? 'show' : ''}`} role="alert">
      {message}
      <button className="close" data-dismiss="alert" aria-label="Close" onClick={closeAlert}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

/**
 * How to use?
 *
 * <Alert message="hi bricechou, nice to meet u." type={'success'} visable={true} />
 */
