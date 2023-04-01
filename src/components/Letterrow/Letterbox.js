import styles from './letter.module.css'

export default function Letterbox(props) {
    return (
        <div className={styles.letterbox}>
            {props.children}
        </div>
    )
}