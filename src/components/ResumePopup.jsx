import { useState } from 'react'
import '../App.css'
import '../styles/ResumePopup.css'

function ResumePopup(
{
    firstName,
    lastName,
    email,
    title,
    company,
    workStartDate,
    workEndDate,
    degree,
    school,
    eduStartDate,
    eduEndDate
}
) {
    
    // Todo: add array.map() for list of jobs/degrees
    // Todo: add button to make invisible

    return(
      <div id='popup'>
        <h1>{firstName} {lastName}</h1>
        <p>{email}</p>

        <h2 className='child'>Work Experience</h2>
        <p className='child'>{workStartDate} - {workEndDate}</p>
        <p className='child'>{title} at {company}</p>

        <h2 className='child'>Education</h2>
        <p className='child'>{eduStartDate} - {eduEndDate}</p>
        <p className='child'>{degree} at {school}
        </p>
      </div>
    );
};


export default ResumePopup;