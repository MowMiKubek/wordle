import Letterbox from "./Letterbox"
import styles from './letter.module.css'

export default function Letterrow(props) {
    const letterList = props.word.split('')
    return (
        <div className={styles.letterrow}>
            { letterList.map(letter => (
                <Letterbox>{letter}</Letterbox>
            ))}
        </div>
    )
}