import { useState } from 'react'
import './App.css'
import Textbox from './components/Textbox.jsx'
import Job from './components/Job.jsx'

function App() {
  
  // Todo: build job list from jobList variable
  const [jobsList, jobsUpdater] = useState(
    [<Job/>]
  );

  // Todo: add job add/remove functionality
  return (
    <>
      <div id="header">
        <h1>Resume Builder</h1>
        <h1>Logo</h1>
      </div>
      <div id="main">
        <h1>General Info</h1>
        <Textbox label='First Name' />
        <Textbox label='Last Name' />
        <Textbox label='Email' />
        <h1>Work Experience</h1>
        <Job />
        <button className="jobButton">Add Another</button>
      </div>
      
    </>
  )
}

export default App
