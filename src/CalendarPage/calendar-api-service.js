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
  }
}

export default CalendarApiService

