import { useState } from 'react'
import styles from './QuizItem.module.css'

export default function QuizItem({content, countAnswer, setAnswerList}) {

  let isAnswer = false
  let answer = ""

  const onClickAnswer = (userAnswer) => {
    answer = userAnswer
    if (userAnswer === content.word_mean) {
      isAnswer = true
    } else {
      isAnswer = false
    }
    countAnswer(isAnswer)
    setAnswerList(answer)
  }

  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.question}>"{content.word}"의 뜻은?</h2>
        <div className={styles.button_container}>
          <a className={styles.item} onClick={() => onClickAnswer(content.word_mean)}><p><span>{content.word_mean}</span></p></a>
          <a className={styles.item} onClick={() => onClickAnswer(content.wrong_answer1)}><p><span>{content.wrong_answer1}</span></p></a>
          <a className={styles.item} onClick={() => onClickAnswer(content.wrong_answer2)}><p><span>{content.wrong_answer2}</span></p></a>
          <a className={styles.item} onClick={() => onClickAnswer(content.wrong_answer3)}><p><span>{content.wrong_answer3}</span></p></a>
        </div>
      </div>
    </div>
  )
}