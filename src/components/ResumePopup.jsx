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
    console.log(firstName)
    return(
      <div id='popup'>
        <h1>{firstName} {lastName}</h1>
        <p>{email}</p>

        <h2>Work Experience</h2>
        <p>{workStartDate} - {workEndDate}</p>
        <p>{title} at {company}</p>

        <h2>Education</h2>
        <p>{eduStartDate} - {eduEndDate}</p>
        <p>{degree} at {school}
        </p>
      </div>
    );
};


export default ResumePopup;