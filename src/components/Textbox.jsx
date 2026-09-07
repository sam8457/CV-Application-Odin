import { useState } from 'react'
import '../App.css'

function Textbox({label, value, onChange}) {

  return (
    <>
      <div className="singleLineText">
        <label htmlFor={label}>{label} </label>
        <input type="text" 
        id={label} 
        name={label} 
        value={value} 
        onChange={(event) => onChange(event.target.value)}/>
      </div>
    </>
  )
}

export default Textbox