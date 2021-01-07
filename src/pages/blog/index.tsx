import React from 'react'
import { LoadingStatusEnum } from '@type/enum/LoadingStatus'
import { NavLink, Link, useParams, useRouteMatch, useLocation, useHistory } from 'react-router-dom'

interface PropsType {
  pageLoading: LoadingStatusEnum
}

export default function Blog(props: PropsType) {
  const { id } = useParams<{ id: string }>()

  const params = useParams()
  const all = useRouteMatch()
  const history = useHistory()
  const location = useLocation()
  return (
    <>
      &gt; &gt; &gt; Blog Id : {id} &lt; &lt; &lt;
      <br />
      searchParams: {JSON.stringify(location, null, 4)}
      <br />
      allUseRouteMatch: {JSON.stringify(all, null, 4)}
      <br />
      params: {JSON.stringify(params, null, 4)}
      <br />
      history : {JSON.stringify(history, null, 4)}
      <br />
      <NavLink to="/demo" activeClassName="hurray">
        go to demo page
      </NavLink>
      <br />
      <Link to="/">go to Home</Link>
    </>
  )
}
