import { useState } from 'react'
import '../App.css'
import '../styles/ResumePopup.css'

function ResumePopup(
{
    firstName,
    lastName,
    email,
    jobs,
    edus,
    popupVisible,
    closePopup
}
) {
    
    // Todo: add array.map() for list of jobs/degrees

    return(
      <div id='popup' className={popupVisible ? 'visible' : 'notVisible'}>
        <h1>{firstName} {lastName}</h1>
        <p>{email}</p>

        <h2 className='child'>Work Experience</h2>
        {Object.entries(jobs).map(([id, job]) => {
          return(
            <div key={id}>
              <p className='child'>{job.workStartDate} - {job.workEndDate}</p>
              <p className='child'>{job.title} at {job.company}</p>
            </div>
          );
        })}
        <h2 className='child'>Education</h2>
        {Object.entries(edus).map(([id, edu]) => {
          return(
            <div key={id}>
              <p className='child'>{edu.eduStartDate} - {edu.eduEndDate}</p>
              <p className='child'>{edu.degree} at {edu.school}</p>
            </div>
        )})}

      <button onClick={closePopup}>Close</button>
      </div>
    );
};


export default ResumePopup;