import React from 'react'
import {FaX} from 'react-icons/fa6'
import { useAppContext } from '../context/appContext';
function Job({
    _id,
    note,
    status,
}) {

    const { setEditNote, editNote, getNotes, deleteNote, darkmode } = useAppContext();
    
  return (
    <div className={darkmode ? 'my-note' : 'my-note-dark'}>
        <div className='right-note'>
        <input type='checkbox' checked={status} className='note-checkbox' onClick={()=>{
            console.log("Clicked")
            setEditNote(_id)
            editNote(_id)
            getNotes()
        }}/>
        <h3 className={status ? "stike-note" : ""}>{note}</h3>
        </div>
        <FaX onClick={()=>{
            deleteNote(_id)
        }}/>
    </div>
  )
}

export default Job