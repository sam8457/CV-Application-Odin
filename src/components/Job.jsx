import { useState } from 'react'
import '../App.css'
import Textbox from './Textbox.jsx'

function Job({id, job, updateSingleJob}) {

  const [title, setTitle] = useState(job.title);

  return (
    <>
      <hr />
      <Textbox
        label={"Job Title"}
        value={title}
        onChange={
          (input) => {
            //console.log('changed title');
            setTitle(input)
            updateSingleJob(
              id, 
              {
                ...job,
                title: input
              }
            )
            //console.log(job)
          }
        }
      />
      <Textbox label={"Company"} />
      <Textbox label={"Date Started"} />
      <Textbox label={"Date Ended"} />
    </>
  )
}

export default Job