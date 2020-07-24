import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Announcement from './Announcement'


describe(`Announcement Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Announcement /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
