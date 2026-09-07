import { useState } from 'react'
import '../App.css'
import Textbox from './Textbox.jsx'

function Job({id, job, updateSingleJob}) {

  return (
    <>
      <hr />
      <Textbox
        label={"Job Title"}
        value={job.title}
        onChange={
          (input) => {
            updateSingleJob(
              id, 
              {
                ...job,
                title: input
      })}}/>
      <Textbox 
        label={"Company"} 
        value={job.company}
        onChange={
          (input) => {
            updateSingleJob(
              id,
              {
                ...job,
                company: input
      })}}/>
      <Textbox 
        label={"Date Started"} 
        value={job.workStartDate}
        onChange={
          (input) => {
            updateSingleJob(
              id,
              {
                ...job,
                workStartDate: input
      })}}/>
      <Textbox 
        label={"Date Ended"} 
        value={job.workEndDate}
        onChange={
          (input) => {
            updateSingleJob(
              id,
              {
                ...job,
                workEndDate: input
        })}}/>
    </>
  )
}

export default Job