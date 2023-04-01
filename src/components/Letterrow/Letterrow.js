import Letterbox from "./Letterbox"
import styles from './letter.module.css'

export default function Letterrow(props) {
    const letterList = props.word.split('')
    const len = letterList.length
    for(let i=len; i<props.wordsize; i++)
        letterList.push('')
    let colors
    if(props.solution !== undefined) {
        colors = letterList.map((letter, id) => {
            if(props.solution.includes(letter)){
                if(props.solution[id] === letter)
                    return "green"
                return "yellow"
            }
            return "none"
        })
    } else 
        colors = letterList.map(letter => "none")

    return (
        <div className={styles.letterrow}>
            { letterList.map((letter, id) => (
                <Letterbox key={id} color={colors[id]}>{letter}</Letterbox>
            ))}
        </div>
    )
}