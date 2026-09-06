import { useState } from 'react'
import './App.css'
import Textbox from './components/Textbox.jsx'
import Job from './components/Job.jsx'

function App() {
  
  const [jobsList, jobsUpdater] = useState(
    [0]
  );

  function addJob() {
    const id = crypto.randomUUID();
    jobsUpdater([...jobsList, id]);
    console.log("add job");
  }

  // Todo: add remove button on per-job basis
  function removeJob(removedJob) {
    const newJobs = jobsList.slice(0,jobsList.length - 1);
    jobsUpdater(newJobs);
    console.log("removeJob")
  }

  return (
    <>
      <div id="header">
        <h1>Resume Builder</h1>
        <h1>Logo</h1>
      </div>
      <div id="main">
        <h2>General Info</h2>
        <Textbox label='First Name' />
        <Textbox label='Last Name' />
        <Textbox label='Email' />
        <h2>Work Experience</h2>
        {jobsList.map(job => <Job key={job}/>)}
        <div id="jobButtons">
          <button onClick={removeJob}>Remove</button>
          <button onClick={addJob}>Add</button>
        </div>
      </div>
    </>
  )
}

export default App
