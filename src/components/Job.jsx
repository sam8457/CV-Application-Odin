import { useState } from 'react'
import '../App.css'
import Textbox from './Textbox.jsx'

function Job({label}) {

  return (
    <>
      <Textbox label={"Job Title"}/>
      <Textbox label={"Company"}/>
      <Textbox label={"Date Started"}/>
      <Textbox label={"Date Ended"}/>
    </>
  )
}

export default Job