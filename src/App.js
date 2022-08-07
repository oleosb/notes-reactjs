import styles from './App.module.css';
import Search from './components/Search';
import NotesList from './components/NotesList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTxt, setSearchTxt] = useState('');

  function handleAddNote(txt) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: txt,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  }

  function handleDelNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem('notes-data'));

    if (localNotes) {
      setNotes(localNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes));
  }, [notes]);

  return (
    <section className={styles.container}>
      <Search handleSearchTxt={setSearchTxt} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchTxt),
        )}
        handleAddNote={handleAddNote}
        handleDelNote={handleDelNote}
      />
    </section>
  );
};

export default App;
