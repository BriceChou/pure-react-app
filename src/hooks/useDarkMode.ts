import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
// Usage
// function App() {
//   const [darkMode, setDarkMode] = useDarkMode();

//   return (
//     <div>
//       <div className="navbar">
//         <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
//       </div>
//       <Content />
//     </div>
//   );
// }

/**
 * 开启暗黑模式
 */
export function useDarkMode() {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage<boolean>('dark-mode-enabled', false)

  useEffect(
    () => {
      const className = 'dark-mode'
      const element = window.document.body
      if (enabledState) {
        element.classList.add(className)
      } else {
        element.classList.remove(className)
      }
    },
    [enabledState], // Only re-call effect when value changes
  )

  // Return enabled state and setter
  return [enabledState, setEnabledState]
}
