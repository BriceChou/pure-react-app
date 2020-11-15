import React from 'react'

type PropsType = {
  text?: string
}

/**
 * 自动识别文本中的链接地址
 */
export default function AutoLink(props: PropsType) {
  const { text = '' } = props

  const delimiter = /((?:https?:\/\/)?(?:(?:[a-z0-9]?(?:[a-z0-9\-]{1,61}[a-z0-9])?\.[^\.|\s])+[a-z\.]*[a-z]+|(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(?::\d{1,5})*[a-z0-9.,_\/~#&=;%+?\-\\(\\)]*)/gi
  return (
    <>
      {text.split(delimiter).map((word, idx) => {
        const match = word.match(delimiter)
        if (match) {
          const url = match[0]
          return (
            <a key={`${idx}/url`} href={url.startsWith('http') ? url : `http://${url}`}>
              {url}
            </a>
          )
        }
        return word
      })}
    </>
  )
}

/**
 * How to use?
 *
  <AutoLink text="foo bar baz http://bricechou.github.io bar" />
 */
