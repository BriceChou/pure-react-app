// https://usehooks.com/useKeyPress/

import { useState, useEffect } from 'react'

// Usage
// function App() {
//   // Call our hook for each key that we'd like to monitor
//   const happyPress = useKeyPress('h')
//   const sadPress = useKeyPress('s')
//   const robotPress = useKeyPress('r')
//   const foxPress = useKeyPress('f')

//   return (
//     <div>
//       <div>h, s, r, f</div>
//       <div>
//         {happyPress && '😊'}
//         {sadPress && '😢'}
//         {robotPress && '🤖'}
//         {foxPress && '🦊'}
//       </div>
//     </div>
//   )
// }

/**
 * 监听按键处理
 *
 * @param targetKey 按键名称
 */
export function useKeyPress(targetKey: string) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)

  // If pressed key is our target key then set to true
  function downHandler({ key }: { key: string }) {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }: { key: string }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keyup', upHandler)
    window.addEventListener('keydown', downHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keyup', upHandler)
      window.removeEventListener('keydown', downHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return keyPressed
}
