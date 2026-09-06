import { useState } from 'react'
import './App.css'
import Textbox from './components/Textbox.jsx'
import Job from './components/Job.jsx'
import Edu from './components/Edu.jsx'

function App() {
  
  // Todo: add resume screen/popup

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

    const [edusList, edusUpdater] = useState(
    [0]
  );

  function addEdu() {
    const id = crypto.randomUUID();
    edusUpdater([...edusList, id]);
    console.log("add Edu");
  }

  // Todo: add remove button on per-edu basis
  function removeEdu(removedEdu) {
    const newEdus = edusList.slice(0,edusList.length - 1);
    edusUpdater(newEdus);
    console.log("removeEdu")
  }

  return (
    <>
      <div id="header">
        <h1>Resume Builder</h1>
        <h1>Logo</h1>
      </div>

      <div id="main">
        <h2 className='sectionHeader'>General Info</h2>
        <hr />
        <Textbox label='First Name' />
        <Textbox label='Last Name' />
        <Textbox label='Email' />

        <h2 className='sectionHeader'>Work Experience</h2>
        {jobsList.map(job => <Job key={job}/>)}
        <div id="jobButtons">
          <button onClick={removeJob}>Remove</button>
          <button onClick={addJob}>Add</button>
        </div>

        <h2 className='sectionHeader'>Education</h2>
        {edusList.map(edu => <Edu key={edu}/>)}
        <div id="eduButtons">
          <button onClick={removeEdu}>Remove</button>
          <button onClick={addEdu}>Add</button>
        </div>

      </div>
    </>
  )
}

export default App
