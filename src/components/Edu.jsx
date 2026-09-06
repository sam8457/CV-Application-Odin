import { useState } from 'react'
import '../App.css'
import Textbox from './Textbox.jsx'

function Edu({label}) {

  return (
    <>
      <hr />
      <Textbox label={"Degree"}/>
      <Textbox label={"School"}/>
      <Textbox label={"Date Started"}/>
      <Textbox label={"Date Ended"}/>
    </>
  )
}

export default Edu