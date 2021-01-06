import React from 'react'
import { Link } from 'react-router-dom'
import { LoadingStatusEnum } from '@type/enum/LoadingStatus'

interface PropsType {
  pageLoading: LoadingStatusEnum
}

export default function About(props: PropsType) {
  return (
    <>
      Redirect About me!
      <nav>
        <Link to="/">go to Home</Link>
      </nav>
    </>
  )
}
