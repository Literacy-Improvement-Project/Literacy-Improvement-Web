import Button from "../../atom/buttons/button";
import styles from "./PrevNextButton.module.css"

export default function PrevNextButton({prevEvent, nextEvent}) {
  return (
    <div className={styles.container}>
    <Button onClick={() => prevEvent()}>❮</Button>
    <Button onClick={() => nextEvent()}>❯</Button>
    </div>
  )
}