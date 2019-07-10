import React from 'react'

import * as dates from 'date-arithmetic'
import { Navigate } from 'react-big-calendar'
import TimeGrid from 'react-big-calendar/lib/TimeGrid'

class ThreeDayWeek extends React.Component {
  render() {
    let { date } = this.props
    let range = ThreeDayWeek.range(date)

    return <TimeGrid {...this.props} range={range} eventOffset={15} />
  }
}

ThreeDayWeek.range = date => {
  let start = date
  let end = dates.add(start, 2, 'day')

  let current = start
  let range = []

  while (dates.lte(current, end, 'day')) {
    range.push(current)
    current = dates.add(current, 1, 'day')
  }

  return range
}

ThreeDayWeek.navigate = (date, action) => {
  switch (action) {
    case Navigate.PREVIOUS:
      return dates.add(date, -3, 'day')

    case Navigate.NEXT:
      return dates.add(date, 3, 'day')

    default:
      return date
  }
}

ThreeDayWeek.title = date => {
  return `${date.toLocaleDateString()}`
}

export default ThreeDayWeek