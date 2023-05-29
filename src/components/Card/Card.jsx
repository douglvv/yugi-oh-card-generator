import styles from './index.module.css'

export default function Card(props) {
    return (
        <div className={styles.container}>
            <img className={styles.cardImg} src={props.imageUrl} alt={props.cardName} />            
        </div>
    )
}