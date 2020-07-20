import React, { Component } from 'react';
import config from '../config'


import './CalendarPage.css';

class CalendarPage extends Component {
  state = {
    events: [],
    error: null,
  };

  componentDidMount() {
	//clear out any errors in state
    this.clearError()

	//call to nomfinder server
    fetch(`${config.API_ENDPOINT}/calendar`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(res => this.setEvents(res))
      .catch(error => this.setState({ error }))
  }

  setEvents = events => {
    this.setState({ events })
  }

  setError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  formatTime = time_string => {
	//takes a hh:mm:00 24 hr string and returns a formatted user friendly 12 hr string
      const time_split = time_string.split(':')
      let hours = time_split[0]
      let minutes = time_split[1]
      let ampm = hours >= 12 ? 'pm' : 'am'
      minutes = minutes < 10 ? '0'+minutes : minutes
  	minutes = minutes > 0 ? minutes : '00'
      hours = hours > 12 ? hours - 12 : hours

      var strTime = hours + ':' + minutes + ' ' + ampm
      return strTime;
  }

  renderCalendar() {
    const events = this.state.events
    if(events.length > 0){

      const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
      let events_by_day = []

	//group events by day
      events.forEach(event=> {
	let scheduled = new Date(event.start_date)
	let d = scheduled.getDate()

	if(events_by_day[d]){
	    events_by_day[d]['events'].push(event)
	}else{
	    events_by_day[d] = []
	    events_by_day[d]['day'] = event.start_date.split('T')[0];
	    events_by_day[d]['day_ts'] = new Date(event.start_date)
		events_by_day[d]['events'] = []
	    events_by_day[d]['events'].push(event)	    
    	}
      })

        return (
            <div className="calendar-month">
                <h4>July</h4>
                {events_by_day.map((event_day) => {
                        let scheduled = event_day.day_ts
                        let day_num = scheduled.getDay()
                        let weekday = weekdays[day_num]
                        let day = scheduled.getDate()
                        
                        let event_list = event_day.events.map((event,i)=>{
                            let list_id = day+"_"+i //unique id

			    //formatting start and end time strings
			    let start_time = event.start_date.split('T')[1]
                                let start_str = this.formatTime(start_time)
			    let end_time = event.end_date.split('T')[1]
			        let end_str = this.formatTime(end_time)
			    
                            return(<div key={list_id} className='calendar-event'>
                                <strong>{event.event_name}</strong>
                                <blockquote>
                                    <strong>{start_str} - {end_str}</strong><br/>
                                    {event.location_address}
                                    <br/>
                                    {event.location_city}, {event.location_zipcode}
                                </blockquote>
                            </div>);
                        })

			let day_ordinal = 'th'
			if( day === 1 ){
			    day_ordinal = 'st'
			}else if( day === 2 ){
			    day_ordinal = 'nd'
			}else if( day === 3 ){
			    day_ordinal = 'rd'
			}

                        return ( 
                            <div className='calendar-day' key={day}>
                                <div className='calendar-day-string'>{weekday} {day}<span id='day_ordinal'>{day_ordinal}</span></div>
                                <div className='calendar-details'>{event_list}</div>
                            </div>
                        )
                  })
                }

            </div>
        )
    }
  }
  
  render(){
    const error = this.state.error
    return(
        <div className="calendar-page">
            <h4>Where to Find Us!</h4>
	    {error
	      ? <p>there was an error</p>
	      : this.renderCalendar()}
        </div>
    );
  }

}

export default CalendarPage;
