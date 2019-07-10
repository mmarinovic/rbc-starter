import React, { Component } from "react";
import ThreeDayWeek from './ThreeDayWeek';
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  Calendar,
  momentLocalizer
} from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
class App extends Component {
  state = {
    events: [
      {
        start: new Date('2019-07-07T08:15:00'),
        end: new Date('2019-07-07T15:00:00'),
        title: "8:15",
        available: false
      },
      {
        start: new Date('2019-07-07T15:15:00'),
        end: new Date('2019-07-07T20:00:00'),
        title: "15:15",
        available: true
      },
      {
        start: new Date('2019-07-08T11:15:00'),
        end: new Date('2019-07-08T16:00:00'),
        title: "11:15",
        available: true
      },
      {
        start: new Date('2019-07-08T16:00:00'),
        end: new Date('2019-07-08T22:00:00'),
        title: "16:00",
        available: false
      },
      {
        start: new Date('2019-07-09T10:15:00'),
        end: new Date('2019-07-09T14:45:00'),
        title: "10:15",
        available: true
      },
      {
        start: new Date('2019-07-09T14:45:00'),
        end: new Date('2019-07-09T20:00:00'),
        title: "14:15",
        available: false
      }
    ]
  };

  eventStyleGetter = function(event, start, end, isSelected) {
    var availbleColor = "#D5F5E9"
    var unavilableColor = "#FEDFE0"
    var backgroundColor = event.available ? availbleColor : unavilableColor
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 0.8,
        color: 'black',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
}

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView={'week'}
          //views={['week']}
          views={{ month: true, week: ThreeDayWeek }}
          events={this.state.events}
          style={{ height: "100vh" }}
          showMultiDayTimes={true}
          eventPropGetter={(this.eventStyleGetter)}
        />
      </div>
    );
  }
}

export default App;
