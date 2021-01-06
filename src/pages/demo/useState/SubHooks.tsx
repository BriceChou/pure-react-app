import React, { useRef, useState, useEffect } from 'react'
import { LoadingStatusEnum } from '@type/enum/LoadingStatus'

interface PropsType {
  status: LoadingStatusEnum
}

function SubHooks(props: PropsType) {
  const log = 'SUB Component: '
  console.log(log + '---- render SubHooks ----')
  const { status } = props
  // const [subStatus, setSub] = useState(() => {
  //   console.log(log + '--- bricechou useStat subStatus ---', status)
  //   return status + 2
  // })
  const [subStatus, setSub] = useState(status)
  console.log(log + 'birccc subStatus', subStatus, status)
  const componetHooks = document.getElementById('subHooks')
  console.log(log + 'document.getElementById("subHooks")', componetHooks)
  const subHooks = useRef(componetHooks)
  const subHookElem = useRef(null)
  console.log(log + 'subHookElem', subHookElem)

  useEffect(() => {
    console.log(log + 'useEffect subHookElem', subHookElem)
  })

  return (
    <div id="subHooks" ref={subHookElem}>
      SubHooks
      <br />
      <button
        onClick={() => {
          setSub(prev => {
            console.log(log + '--- SubHooks button ---', prev)
            return 2
          })
        }}>
        SUB click it
      </button>
    </div>
  )
}

export default SubHooks
