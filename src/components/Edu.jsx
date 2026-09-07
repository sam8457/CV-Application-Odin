import { useState } from 'react'
import '../App.css'
import Textbox from './Textbox.jsx'

function Edu({id, edu, updateSingleEdu}) {

  return (

    <>
      <hr />
      <Textbox
        label={"Degree"}
        value={edu.degree}
        onChange={
          (input) => {
            updateSingleEdu(
              id, 
              {
                ...edu,
                degree: input
      })}}/>
      <Textbox 
        label={"School"} 
        value={edu.school}
        onChange={
          (input) => {
            updateSingleEdu(
              id,
              {
                ...edu,
                school: input
      })}}/>
      <Textbox 
        label={"Date Started"} 
        value={edu.eduStartDate}
        onChange={
          (input) => {
            updateSingleEdu(
              id,
              {
                ...edu,
                eduStartDate: input
      })}}/>
      <Textbox 
        label={"Date Ended"} 
        value={edu.eduEndDate}
        onChange={
          (input) => {
            updateSingleEdu(
              id,
              {
                ...edu,
                eduEndDate: input
        })}}/>
    </>
  )
}

export default Edu