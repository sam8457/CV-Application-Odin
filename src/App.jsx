import { useState } from 'react'
import './App.css'
import Textbox from './components/Textbox.jsx'
import Job from './components/Job.jsx'
import Edu from './components/Edu.jsx'
import ResumePopup from './components/ResumePopup.jsx'

function getLastKey(obj){
  let lastKey = Object.keys(obj)[Object.keys(obj).length - 1] 
  return lastKey;
}

function App() {
  
  // Todo: use definitve id's for children
  // Todo: resolve react error messages about controlled/uncontrolled input
  // Todo: align text boxes better
  // Todo: add remove button on per-job/edu basis

  const [jobsList, jobsUpdater] = useState(
    {
      0:{
        title: '',
        company: '',
        workStartDate: '',
        workEndDate: '',
      },
    });

  function updateSingleJob(id, newJob) {
    let newJobs = {...jobsList};
    newJobs[id] = newJob;
    jobsUpdater(newJobs);
  };

  function addJob() {
    const id = crypto.randomUUID();
    jobsUpdater({...jobsList, [id]:{
        title: '',
        company: '',
        workStartDate: '',
        workEndDate: '',
      }});
  };

  function removeJob(removedId) {
    let newJobs = {...jobsList};
    delete newJobs[removedId];
    jobsUpdater(newJobs);
  };

  const [edusList, edusUpdater] = useState(
      {0:{
        degree: '',
        school: '',
        eduStartDate: '',
        eduEndDate: '',
      },}
    );

  function updateSingleEdu(id, newEdu) {
    let newEdus = {...edusList}
    newEdus[id] = newEdu
    edusUpdater(newEdus)
  };

  function addEdu() {
    const id = crypto.randomUUID();
    edusUpdater({...edusList, [id]:{
        degree: '',
        school: '',
        eduStartDate: '',
        eduEndDate: '',
      }});
  };

  function removeEdu(removedId) {
    let newEdus = {...edusList};
    delete newEdus[removedId];
    edusUpdater(newEdus);
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
        {Object.entries(jobsList).map(
          ([id, job]) => {return(
            <Job
            key={id}
            id={id}
            job={job}
            updateSingleJob={updateSingleJob}/>
          )}
        )}
        <div id="jobButtons">
          <button onClick={() => removeJob(getLastKey(jobsList))}>Remove</button>
          <button onClick={addJob}>Add</button>
        </div>
 
        <h2 className='sectionHeader'>Education</h2>
        {Object.entries(edusList).map(
          ([id, edu]) => {return(
            <Edu
            key={id}
            id={id}
            edu={edu}
            updateSingleEdu={updateSingleEdu}/>
          )}
        )}
        <div id="eduButtons">
          <button onClick={() => removeEdu(getLastKey(edusList))}>Remove</button>
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
