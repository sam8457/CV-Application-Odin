import { useState } from 'react'
import './App.css'
import Textbox from './components/Textbox.jsx'
import Job from './components/Job.jsx'
import Edu from './components/Edu.jsx'
import ResumePopup from './components/ResumePopup.jsx'

function App() {
  
  // Todo: submit data from fields to popup
  // Todo: change visibility of popup via buttons
  // Todo: align text boxes better

  const [jobsList, jobsUpdater] = useState(
    [
      {
        title: '',
        company: '',
        workStartDate: '',
        workEndDate: '',
      },
    ]);

  function updateSingleJob(id, newJob) {
    let newJobs = [...jobsList]
    newJobs[id] = newJob
    jobsUpdater(newJobs)
  };

  function addJob() {
    //const id = crypto.randomUUID();
    jobsUpdater([...jobsList, {}]);
    console.log("add job");
  };

  // Todo: add remove button on per-job basis
  function removeJob(removedJob) {
    const newJobs = jobsList.slice(0,jobsList.length - 1);
    jobsUpdater(newJobs);
    console.log("removeJob")
  };

  const [edusList, edusUpdater] = useState(
    [
      {
        degree: '',
        school: '',
        eduStartDate: '',
        eduEndDate: '',
      },
    ]);

  function updateSingleEdu(id, newEdu) {
    let newEdus = [...edusList]
    newEdus[id] = newEdu
    edusUpdater(newEdus)
  };

  function addEdu() {
    //const id = crypto.randomUUID();
    edusUpdater([...edusList, {}]);
    console.log("add Edu");
  };

  // Todo: add remove button on per-edu basis
  function removeEdu(removedEdu) {
    const newEdus = edusList.slice(0,edusList.length - 1);
    edusUpdater(newEdus);
    console.log("removeEdu")
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [popupVisible, setPopupVisibility] = useState(false);

  return (
    <>
      <div id="header">
        <h1>Resume Builder</h1>
        <h1>Logo</h1>
      </div>

      <div id="main">
        <h2 className='sectionHeader'>General Info</h2>
        <hr />
        <Textbox label='First Name' value={firstName} onChange={setFirstName}/>
        <Textbox label='Last Name' value={lastName} onChange={setLastName}/>
        <Textbox label='Email' value={email} onChange={setEmail}/>

        <h2 className='sectionHeader'>Work Experience</h2>
        {jobsList.map(
          (job, index) => {return(
            <Job
            key={index}
            id={index}
            job={job}
            updateSingleJob={updateSingleJob}/>
          )}
        )}
        <div id="jobButtons">
          <button onClick={removeJob}>Remove</button>
          <button onClick={addJob}>Add</button>
        </div>

        <h2 className='sectionHeader'>Education</h2>
        {edusList.map(
          (edu, index) => {return(
            <Edu
            key={index}
            id={index}
            edu={edu}
            updateSingleEdu={updateSingleEdu}/>
          )}
        )}
        <div id="eduButtons">
          <button onClick={removeEdu}>Remove</button>
          <button onClick={addEdu}>Add</button>
        </div>

        <button onClick={() => setPopupVisibility(true)}>Submit</button>
      </div>

      <ResumePopup 
        firstName={firstName}
        lastName={lastName}
        email={email}
        jobs={jobsList}
        edus={edusList}
        popupVisible={popupVisible}
        closePopup={() => setPopupVisibility(false)}
      />
    </>
  )
}

export default App
