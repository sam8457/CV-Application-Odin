import { useState } from 'react'
import '../App.css'

function Textbox({label}) {

  return (
    <>
      <div className="singleLineText">
        <label for={label}>{label} </label>
        <input type="text" id={label} name={label}/>
      </div>
    </>
  )
}

export default Textbox