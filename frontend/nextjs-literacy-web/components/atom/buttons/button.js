import styles from './Button.module.css';

export default function Button(props) {
    return (
        <button className={`${styles.btn3} ${styles.custombtn}`}
            onClick={props.click}><span>Read More</span></button>
    )
}