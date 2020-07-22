import React, { Component } from 'react';
import config from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar  } from '@fortawesome/free-solid-svg-icons'


import './CalendarPage.css';

class CalendarPage extends Component {
  state = {
    events: [],
    error: null,
    userId: 1,
    favs: [],
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
    this.getFavs()
  }

  getFavs = () => {
    fetch(`${config.API_ENDPOINT}/calendar/fav/${this.state.userId}/0`, {
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
      .then(
        res => {
          if(res.length){
            this.setFav(res)
          }
        }
      )
      .catch()
  }

  setFav = favs => {
    this.setState({favs})
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

  addFav = (eventId) => {
    fetch(`${config.API_ENDPOINT}/calendar/fav/${this.state.userId}/${eventId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.state.userId,
        event_id: eventId,
      }),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(res=>
	this.setState({favs: [...this.state.favs, res]})
      )
      .catch()
  }

  removeFav = (rowId) => {
    fetch(`${config.API_ENDPOINT}/calendar/fav/${this.state.userId}/${rowId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.state.userId,
        event_id: rowId,
      }),
    })
      .then(res => { 
        if (!res.ok) {
          throw new Error(res.status)
        }
      })
      .then(()=>{
	const newfavs = this.state.favs.filter(f =>
	  f.id !== rowId
    	)
        this.setState({favs: newfavs})
      })
      .catch()
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
    const favs = this.state.favs
    let fav_by_id = []
    let has_favs = 0
    if(favs.length > 0){
	has_favs = 1
	favs.forEach(fav=>{
	  fav_by_id[fav.event_id] = []
	  fav_by_id[fav.event_id]['rowId'] = fav.id
	})
    }
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
	    		let fav_str = 0
			    if(has_favs && fav_by_id[event.id]){
				fav_str = 1
			    }

                            return(<div key={list_id} className='calendar-event'>
				<div className='event-detail-text'>
                                <strong>{event.event_name}</strong>
                                <blockquote>
                                    <strong>{start_str} - {end_str}</strong><br/>
                                    {event.location_address}
                                    <br/>
                                    {event.location_city}, {event.location_zipcode}
                                  {fav_str
                                    ?  <div className='fav-button'><button onClick={()=>this.removeFav(fav_by_id[event.id]['rowId'])} className='unfav'>Un-Fav This Event</button></div>
                                    :  <div className='fav-button'><button onClick={()=>this.addFav(event.id)}className='fav'>Fav This Event</button></div>
                                  }
                                </blockquote>
				</div>
                                {fav_str ? <div className='fav-star fav-star-gold'><FontAwesomeIcon icon={faStar} className='fa-lg' title="fav'd" aria-hidden="true"/></div> : <div className='fav-star fav-star-grey'><FontAwesomeIcon icon={faStar} className='fa-lg' title="fav'd" aria-hidden="true"/></div>}
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
