import React from 'react'
import type { ReactNode } from 'react'

interface PropsType {
  body: string
  email: string
  subject: string
  children: ReactNode
}

/**
 * 发送邮件给
 */
export function Mailto(props: PropsType) {
  const { email, subject, body, children } = props
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>
      {children}
    </a>
  )
}

/**
 * How to use?
 *
  <Mailto email="bricechou@gmail.com" subject="Hello & Welcome" body="Hello world!">
    Mail me!
  </Mailto>
 */
