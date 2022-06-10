import styles from './Card.module.css'

export default function Card({content}) {

  return (
    <div className={styles.container}>
      <div className={styles.word} lang="ko">{content.word}</div>
      <div className={styles.morphem}>({content.morpheme})</div>
      <p className={styles.mean}>{content.mean}</p>
    </div>
  )
}
