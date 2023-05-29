import logo from '../../assets/yugioh.png'
import styles from './index.module.css'

export default function Title(){
    return(
        <div className={styles.container}>
            <img src={logo} alt="logo" className="logo" />
        </div>
    )
}