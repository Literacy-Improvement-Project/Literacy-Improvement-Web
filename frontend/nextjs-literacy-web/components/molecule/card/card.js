import styles from './Card.module.css'

export default function Card({content}) {
  
  return (
    <div className={styles.card_container}>
      <div className={styles.card_content}>
        <h2>{content.title}</h2>
        <h4>{content.text}</h4>
      </div>
    </div>
  )
}
