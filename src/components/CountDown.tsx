import React, { useEffect } from 'react'

interface PropsType {
  hours: number | string
  minutes: number | string
  seconds: number | string
}

/**
 * TODO: 当输入的秒大于 60，分 大于 60，进行换算处理。
 *
 * 倒计时组件
 */
export default function CountDown(props: PropsType) {
  const { hours = 0, minutes = 0, seconds = 0 } = props

  const [over, setOver] = React.useState(false)
  const [paused, setPaused] = React.useState(false)
  const [time, setTime] = React.useState({
    hours: parseInt(`${hours}`),
    minutes: parseInt(`${minutes}`),
    seconds: parseInt(`${seconds}`),
  })

  const tick = () => {
    if (paused || over) {
      return
    }
    if (time.hours == 0 && time.minutes == 0 && time.seconds == 0) {
      setOver(true)
    } else if (time.minutes == 0 && time.seconds == 0) {
      setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59,
      })
    } else if (time.seconds == 0) {
      setTime({
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59,
      })
    } else {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      })
    }
  }

  const reset = () => {
    setTime({
      hours: parseInt(`${hours}`),
      minutes: parseInt(`${minutes}`),
      seconds: parseInt(`${seconds}`),
    })
    setPaused(false)
    setOver(false)
  }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)
    return () => clearInterval(timerID)
  })

  return (
    <div>
      <p>{`${time.hours.toString().padStart(2, '0')}:${time.minutes
        .toString()
        .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p>
      <div>{over ? "Time's up!" : ''}</div>
      <button onClick={() => setPaused(!paused)}>{paused ? 'Resume' : 'Pause'}</button>
      <button onClick={() => reset()}>Restart</button>
    </div>
  )
}
