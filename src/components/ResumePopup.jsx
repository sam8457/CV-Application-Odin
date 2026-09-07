import { useState } from 'react'
import '../App.css'
import '../styles/ResumePopup.css'

function ResumePopup(
{
    firstName,
    lastName,
    email,
    jobs,
    degree,
    school,
    eduStartDate,
    eduEndDate,
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
        {jobs.map( job =>  {
          <div>
            <p className='child'>{job.workStartDate} - {job.workEndDate}</p>
            <p className='child'>{job.title} at {job.company}</p>
          </div>
        })}
        <h2 className='child'>Education</h2>
        <p className='child'>{eduStartDate} - {eduEndDate}</p>
        <p className='child'>{degree} at {school}
        </p>

      <button onClick={closePopup}>Close</button>
      </div>
    );
};


export default ResumePopup;