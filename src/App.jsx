import { useState } from 'react'
import './App.css'
import Textbox from './components/Textbox.jsx'

function App() {
  
  return (
    <>
      <div id="header">
        <h1>Resume Builder</h1>
        <h1>Logo</h1>
      </div>
      <div>
        <h1>General Info</h1>
        <Textbox label='First Name' />
        <Textbox label='Last Name' />
        <Textbox label='Email' />
      </div>
    </>
  )
}

export default App
