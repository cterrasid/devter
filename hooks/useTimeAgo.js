import { useState, useEffect } from "react"

const DATE_UNITS = [
  ["day", 84600],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
]

const getDateDiffs = (timeStamp) => {
  const now = Date.now()
  const elapsed = (timeStamp - now) / 1000 // Because time comes in miliseconds

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.round(elapsed / secondsInUnit)

      return { value, unit }
    }
  }
}

export default function useTimeAgo(timeStamp) {
  const [timeago, setTimeago] = useState(() => getDateDiffs(timeStamp))

  useEffect(() => {
    const second = timeago.unit === "second"
    const minute = timeago.unit === "minute"

    if (second || minute) {
      const interval = setInterval(
        () => {
          const newTimeAgo = getDateDiffs(timeStamp)
          setTimeago(newTimeAgo)
        },
        second ? 5000 : 60000
      )

      return () => clearInterval(interval)
    }
  }, [timeStamp])

  const rtf = new Intl.RelativeTimeFormat(navigator.language, {
    style: "long",
  })

  const { value, unit } = timeago

  return rtf.format(value, unit)
}
