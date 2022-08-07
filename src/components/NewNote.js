import styles from './NewNote.module.css'
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';

const NewNote = ({handleAddNote}) => {
  const [newNote, setNewNote] = useState('')
  const charac = 400

  function handleChange({target}){
    if(charac - target.value.length >= 0){
      setNewNote(target.value)
    }
  }

  function addNote(){
    if(newNote.trim().length > 0){
      handleAddNote(newNote)
      setNewNote('')
    }
    
  }
  
  return (
    <div className={styles.newNote}>
      <textarea
        placeholder='digite uma nota...'
        value={newNote}
        onChange={handleChange}
      />
      <div>
        <small>{charac - newNote.length} caracteres restantes.</small>
        <button onClick={addNote}><FaPlus /></button>
      </div>
    </div>
  )
}

export default NewNote
