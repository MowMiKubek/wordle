import styles from './letter.module.css'

export default function Letterbox(props) {
    const {color} = props
    return (
        <div className={`
        ${styles.letterbox} 
        ${color === "green" 
        ? styles.green 
        : color === "yellow"
            ? styles.yellow
            : null
        }`}>
            {props.children}
        </div>
    )
}