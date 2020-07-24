import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MenuPage from './MenuPage'


describe(`Menu Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><MenuPage /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
