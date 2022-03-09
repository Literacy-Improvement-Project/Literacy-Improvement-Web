import styles from './Button.module.css'
export default function Button({types, label, onClickEvent }) {

  return (
    <button className={styles.button} onClick={() => onClickEvent()}>
      <span className="screen-reader-text"></span>
      <i>{label}</i></button>
  )
}