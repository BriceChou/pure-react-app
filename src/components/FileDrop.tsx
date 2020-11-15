import '../../static/css/filedrop.css'
import React, { useState, useRef, useEffect } from 'react'

interface PropsType {
  onDrop: (file: File) => void
}

/**
 * 拖拽文件上传
 */
export default function TreeView(props: PropsType) {
  const { onDrop } = props
  const [drag, setDrag] = useState(false)
  const [filename, setFilename] = useState('')
  const dropRef = useRef(null)
  let dragCounter = 0

  const handleDrag = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragIn = e => {
    e.preventDefault()
    e.stopPropagation()
    dragCounter++
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) setDrag(true)
  }

  const handleDragOut = e => {
    e.preventDefault()
    e.stopPropagation()
    dragCounter--
    if (dragCounter === 0) setDrag(false)
  }

  const handleDrop = e => {
    e.preventDefault()
    e.stopPropagation()
    setDrag(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onDrop(e.dataTransfer.files[0])
      setFilename(e.dataTransfer.files[0].name)
      e.dataTransfer.clearData()
      dragCounter = 0
    }
  }

  useEffect(() => {
    let div: HTMLDivElement = dropRef.current!
    div.addEventListener('drop', handleDrop)
    div.addEventListener('dragover', handleDrag)
    div.addEventListener('dragenter', handleDragIn)
    div.addEventListener('dragleave', handleDragOut)
    return () => {
      div.removeEventListener('drop', handleDrop)
      div.removeEventListener('dragover', handleDrag)
      div.removeEventListener('dragenter', handleDragIn)
      div.removeEventListener('dragleave', handleDragOut)
    }
  })

  return (
    <div ref={dropRef} className={drag ? 'filedrop drag' : filename ? 'filedrop ready' : 'filedrop'}>
      {filename && !drag ? <div>{filename}</div> : <div>Drop files here!</div>}
    </div>
  )
}

/**
 * How to use?
 *
 *
  <FileDrop onDrop={console.log} />
 */
