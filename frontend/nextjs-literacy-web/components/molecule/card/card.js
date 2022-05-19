import styles from './Card.module.css'

export default function Card({content}) {
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{content.title}</h2>
        <h4>{content.text}</h4>
      </div>
    </div>
  )
}
