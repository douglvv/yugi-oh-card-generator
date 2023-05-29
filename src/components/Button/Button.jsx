import styles from './index.module.css'

export default function Button(props) {
    return (
        <div className={styles.container} >
            <button onClick={props.onClick} className={styles.fetchCardButton}>{props.title}</button>
        </div>
    )
}