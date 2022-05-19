import { useState } from 'react'
import Button from '../../atom/Button/Button'
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
        <h2>"{content.word}"의 뜻은?</h2>
        <div className={styles.button_container}>
          <Button onClick={() => onClickAnswer(content.word_mean)} label={content.word_mean}></Button>
          <Button onClick={() => onClickAnswer(content.wrong_answer1)} label={content.wrong_answer1}></Button>
          <Button onClick={() => onClickAnswer(content.wrong_answer2)} label={content.wrong_answer2}></Button>
          <Button onClick={() => onClickAnswer(content.wrong_answer3)} label={content.wrong_answer3}></Button>
        </div>
      </div>
    </div>
  )
}