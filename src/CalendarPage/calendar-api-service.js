import config from '../config'

const CalendarApiService = {
  getUpcomingEvents() {
    return fetch(`${config.API_ENDPOINT}/calendar`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }})
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getFavoriteEvents(userId) {
    return fetch(`${config.API_ENDPOINT}/calendar/fav/${userId}`, {
     method: 'GET',
      headers: {
        'content-type': 'application/json',
      }})
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )   
  },  
  addFavoriteEvent(userId, eventId) {
    return fetch(`${config.API_ENDPOINT}/calendar/fav/${userId}/${eventId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        event_id: eventId
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )   
  },
  deleteFavoriteEvent(userId,eventRowId) {
    return fetch(`${config.API_ENDPOINT}/calendar/${userId}/${eventRowId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        event_id: eventRowId
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default CalendarApiService

