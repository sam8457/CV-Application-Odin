import { useState } from 'react'
import '../App.css'
import Textbox from './Textbox.jsx'

function General() {

  return (
    <>
      <h1>General Info</h1>
      <div>
        <label for="firstName">First Name: </label>
        <input type="text" id="firstName" name="firstName"/>
      </div>
      <div>
        <label for="firstName">Last Name: </label>
        <input type="text" id="lastName" name="lastName"/>
      </div>
      <Textbox label='Email'></Textbox>
    </>
  )
}

export default General