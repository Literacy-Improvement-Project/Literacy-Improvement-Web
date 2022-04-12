import styles from './DescribePage.module.css'

export default function DescribePage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Lorem Ipsum</h2>
      </div>
      <div className={styles.text}>
        <text>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </text>
      </div>
    </div>
  )
}