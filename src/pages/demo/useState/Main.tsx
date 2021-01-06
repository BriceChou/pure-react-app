import SubHooks from './SubHooks'
import React, { useState } from 'react'
import { LoadingStatusEnum } from '@type/enum/LoadingStatus'

interface PropsType {
  pageLoading: LoadingStatusEnum
}

function Main(props: PropsType) {
  const log = 'Main Component: '
  const { pageLoading } = props
  console.log(log + '--- render main ---', pageLoading)
  const [mainStatus, setMain] = useState(0)
  return (
    <div>
      Main Components, <br />
      <button
        onClick={() => {
          setMain(prev => {
            console.log(log + '--- Main button ---', prev)
            return 2
          })
        }}>
        MAIN click it
      </button>
      <hr></hr>
      <SubHooks status={pageLoading} />
    </div>
  )
}

export default Main
