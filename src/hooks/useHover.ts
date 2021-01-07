import { useRef, useState, useEffect } from 'react'

// Usage
// function App() {
//   const [hoverRef, isHovered] = useHover();

//   return (
//     <div ref={hoverRef}>
//       {isHovered ? '😁' : '☹️'}
//     </div>
//   );
// }

/**
 * 处理 hover 事件
 */
export function useHover() {
  const ref = useRef<Element>(null)
  const [value, setValue] = useState(false)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(
    () => {
      const node = ref.current
      if (node) {
        node.addEventListener('mouseout', handleMouseOut)
        node.addEventListener('mouseover', handleMouseOver)
        return () => {
          node.removeEventListener('mouseout', handleMouseOut)
          node.removeEventListener('mouseover', handleMouseOver)
        }
      }
    },
    [ref.current], // Recall only if ref changes
  )

  return [ref, value]
}
