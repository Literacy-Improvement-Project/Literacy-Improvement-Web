import styles from './Card.module.css'

export default function Card({content}) {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.word} lang="ko">{content.title}</div>
        <p className={styles.mean}>{content.overview}</p>
      </div>
    </div>
  )
}
