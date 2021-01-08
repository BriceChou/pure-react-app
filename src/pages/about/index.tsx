import React from 'react'
import { Link, Prompt } from 'react-router-dom'
import { LoadingStatusEnum } from '@type/LoadingStatusEnum'

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
      <Prompt when={true} message={location => `Are you sure you want to go to ${location.pathname}`} />
    </>
  )
}
