import { useState } from 'react'
import '../App.css'
import Textbox from './Textbox.jsx'

function Job({id, job, updateSingleJob}) {

  return (
    <>
      <hr />
      <Textbox
        label={"Job Title"}
        value={job.title}
        onChange={
          (input) => {
            updateSingleJob(
              id, 
              {
                ...job,
                title: input
              })}}
      />
      <Textbox 
        label={"Company"} 
      />
      <Textbox label={"Date Started"} />
      <Textbox label={"Date Ended"} />
    </>
  )
}

export default Job