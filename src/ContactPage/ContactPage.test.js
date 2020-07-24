import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ContactPage from './ContactPage'


describe(`Contact Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><ContactPage /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
