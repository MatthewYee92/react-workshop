// portal for connecting React shadow dom / virtual dom to the DOM
import React from 'react'
// only used in this file
import ReactDOM from 'react-dom'

// import the app engine
import App from './App'

// functional programming technique to keep code clean
const rootEl = document.getElementById('root')

// pass in the App component into the render method
ReactDOM.render(<App/>,rootEl)