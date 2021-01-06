import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { LoadingStatusEnum } from '@type/enum/LoadingStatus'

interface PropsType {
  pageLoading: LoadingStatusEnum
}

export default function Blog(props: PropsType) {
  const searchParams = location.search || 'hello'
  return (
    <>
      {' '}
      &gt; &gt; &gt; Blog Id : {searchParams} <br />
      <NavLink to="/demo" activeClassName="hurray">
        go to demo page
      </NavLink>
      <br />
      <Link to="/">go to Home</Link>
    </>
  )
}
