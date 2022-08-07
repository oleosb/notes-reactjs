import styles from './Note.module.css'
import { FaTrash } from "react-icons/fa";

const Note = ({id, text, date, handleDelNote}) => {
  return (
    <div className={styles.note}>
      <p>{text}</p>
      <div>
        <small>{date}</small>
        <button onClick={() => handleDelNote(id)}><FaTrash /></button>
      </div>
    </div>
  )
}

export default Note
