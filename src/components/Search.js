import { FaSistrix } from "react-icons/fa"
import styles from './Search.module.css'

const Search = ({handleSearchTxt}) => {

  return (
    <div className={styles.search}>
      <FaSistrix />
      <input 
        type="text"
        placeholder="digite para buscar..."
        onChange={({target}) => handleSearchTxt(target.value)}
      />
    </div>
  )
}

export default Search
