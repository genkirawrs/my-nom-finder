import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CalendarPage.css';

class CalendarPage extends Component {


  render(){
    const events = [
	{
	  'day' : 7,
	  'day_str' : "TUE",
	  'schedule' : [
	          {"name":"Lunch @ Location 1","day": 7, "time":"11:30am - 1:30pm","location":"123 Main Street, city, state, zip"},
        	  {"name":"Dinner @ Location 1","day": 7,"time":"5:30pm - 7:30pm","location":"1 Maple Lane, city, state, zip"},
	  ]
	},
	{
          'day' : 9,
          'day_str' : "THU",
          'schedule' : [
	          {"name":"Private Event","day": 9,"time": "", "location":""},
	  ]
	},
	{
          'day' : 11,
          'day_str' : "SAT",
          'schedule' : [
	          {"name":"Lunch @ Location 3","day": 10,"time":"11:30am - 1:30pm","location":"123 Main Street, city, state, zip"}
	  ]
	},
        { 
          'day' : 13,
          'day_str' : "MON",
          'schedule' : [
                  {"name":"Lunch @ Location 1","day": 7, "time":"11:30am - 1:30pm","location":"123 Main Street, city, state, zip"},
                  {"name":"Dinner @ Location 1","day": 7,"time":"5:30pm - 7:30pm","location":"1 Maple Lane, city, state, zip"},
          ]       
        },
        {
          'day' : 14,
          'day_str' : "TUE",
          'schedule' : [
                  {"name":"Private Event","day": 9,"time": "", "location":""},
          ]       
        },
        {
          'day' : 16,
          'day_str' : "THU",
          'schedule' : [
                  {"name":"Lunch @ Location 3","day": 10,"time":"11:30am - 1:30pm","location":"123 Main Street, city, state, zip"}
          ]       
        }
      ]

    return(
        <div className="calendar-page">
            <h4>Where to Find Us!</h4>
                <div className="calendar-month">
		<div className="calendar-nav">
		<div className="next-month">August Events >> </div>
		</div>
		<h4>July</h4>
                {events.map((item,p) => {
			let scheduled = item.schedule
			let d = item.day
                        let test = scheduled.map((event,i)=>{
			    let list_id = event.day+"_"+i

                            return(<div key={list_id} className='calendar-event'>
                                <strong>{event.name}</strong>
                                <blockquote>
                                    <strong>{event.time}</strong><br/>
                                    {event.location}
                                </blockquote>
                            </div>);
                        }) 

			return (
			    <div className='calendar-day' key={d}>
				<div className='calendar-day-string'>{item.day_str}<br/>{item.day}</div>
				<div className='calendar-details'>{test}</div>
			    </div>
			)
                  })
		}
		</div>
        </div>
    );
  }

}

export default CalendarPage;
