import config from '../config'

const MenuApiService = {
  getMenuItems() {
    return fetch(`${config.API_ENDPOINT}/menu`, {
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

export default MenuApiService
