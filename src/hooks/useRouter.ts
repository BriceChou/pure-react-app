// https://usehooks.com/useRouter/

import { useMemo } from 'react'
// import queryString from 'query-string';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom'

// Usage
// function MyComponent(){
//   // Get the router object
//   const router = useRouter();

//   // Get value from query string (?postId=123) or route param (/:postId)
//   console.log(router.query.postId);

//   // Get current pathname
//   console.log(router.pathname)

//   // Navigate with with router.push()
//   return (
//     <button onClick={(e) => router.push('/about')}>About</button>
//   );
// }

/**
 * 处理路由跳转
 */
export function useRouter() {
  const params = useParams()
  const history = useHistory()
  const match = useRouteMatch()
  const location = useLocation()

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      // query: {
      //   ...queryString.parse(location.search), // Convert string to object
      //   ...params
      // },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    }
  }, [params, match, location, history])
}
