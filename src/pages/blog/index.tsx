import React from 'react'
import { NavLink, Link, useParams, useRouteMatch } from 'react-router-dom'
import { LoadingStatusEnum } from '@type/enum/LoadingStatus'

interface PropsType {
  pageLoading: LoadingStatusEnum
}

export default function Blog(props: PropsType) {
  const { id } = useParams<{ id: string }>()

  const all = useRouteMatch()
  const params = useParams()
  const searchParams = location.search || 'hello'
  return (
    <>
      {' '}
      &gt; &gt; &gt; Blog Id : {id}, searchParams: {searchParams} <br />
      allUseRouteMatch: {JSON.stringify(all, null, 4)}
      <br />
      params: {JSON.stringify(params, null, 4)}
      <br />
      <NavLink to="/demo" activeClassName="hurray">
        go to demo page
      </NavLink>
      <br />
      <Link to="/">go to Home</Link>
    </>
  )
}
