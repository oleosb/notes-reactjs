import styles from './NotesList.module.css'
import Note from './Note'
import NewNote from './NewNote'

import React from 'react'

const NotesList = ({notes, handleAddNote, handleDelNote}) => {
  return (
    <section className={styles.notesList}>
      {notes.map((note, idx)=> (
        <Note 
          {...note}
          key={idx}
          handleDelNote={handleDelNote}
        />
      ))}
      <NewNote
        handleAddNote={handleAddNote}
      />
    </section>
  )
}

export default NotesList
