// https://usehooks.com/useTheme/

import { useLayoutEffect } from 'react'

// Usage
// const theme = {
//   'button-padding': '16px',
//   'button-font-size': '14px',
//   'button-border-radius': '4px',
//   'button-border': 'none',
//   'button-color': '#FFF',
//   'button-background': '#6772e5',
//   'button-hover-border': 'none',
//   'button-hover-color': '#FFF'
// };

// function App() {
//   useTheme(theme);
//   return (
//     <div>
//       <button className="button">Button</button>
//     </div>
//   );
// }

type ThemeType = {
  [propName: string]: string
}

/**
 * 设置主题 css 名
 *
 * @param theme
 */
export function useTheme(theme: ThemeType) {
  useLayoutEffect(
    () => {
      // Iterate through each value in theme object
      for (const key in theme) {
        // Update css variables in document's root element
        document.documentElement.style.setProperty(`--${key}`, theme[key])
      }
    },
    [theme], // Only call again if theme object reference changes
  )
}
