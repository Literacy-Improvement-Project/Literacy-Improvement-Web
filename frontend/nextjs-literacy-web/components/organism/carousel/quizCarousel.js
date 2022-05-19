import React, { useEffect, useState } from "react";
import styles from "./QuizCarousel.module.css";
import PrevNextButton from "../../molecule/buttons/prevnextButton";
import PrevButton from "../../molecule/buttons/prevButton";
import QuizItem from "../../molecule/quizItem/quizitem";
import Button from "../../atom/Button/Button";
import Link from "next/link";

export default function QuizCarousel({slideItems}) {

  const [slideTotal, setSlideTotal] = useState(slideItems.length-1);
  const [slideCurrent, setSlideCurrent] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isSubmitAnswer, setIsSubmitAnswer] = useState(false);

  let answerList = []
  answerList.length = slideTotal+1


  const slideLeft = () => {
    if (slideCurrent < 1) {
      setSlideCurrent(slideTotal)
    }
    else {
      setSlideCurrent(slideCurrent - 1)
    }
  }

  const slideRight = () => {
    if (slideCurrent > slideTotal) {
      setSlideCurrent(slideTotal + 1)
    }
    else {
      setSlideCurrent(slideCurrent + 1)
    }
  }
  console.log(slideItems)
  console.log(answerList)

  const countAnswer = (isAnswer) => {
    {isAnswer? setCorrectCount(correctCount + 1) : {}}
    slideRight()
    console.log(isAnswer)
  }

  const setAnswerList = (userAnswer) => {
    answerList[slideCurrent] = userAnswer
    console.log(answerList)
  }

  const submitAnswer = () => {
    // 퀴즈 결과 제출, 포인트 제출 (backendAPI-post로 전송)
    setIsSubmitAnswer(true)
  }

  const quizSummary = (
    <div>
      <h2>{correctCount}점</h2>
      <h2>{correctCount}/{slideTotal+1}</h2>
      <ul>
        {slideItems.map((slide, index) => {
          return (
            <h4>{slide.word} - {slide.word_mean}</h4>
          )
        })}
      </ul>
    </div>
  )

  return (
    <div className={`${styles.box} ${styles.container}`}>
      <h2 className={styles.text}>우리말 뜻풀이</h2>
      <div>
        {(slideCurrent<=slideTotal)?
        // 퀴즈가 진행중
          slideItems.map((slide, index) => {
            return (
              <div key={index} className={index === slideCurrent 
                ? `${styles.slide} ${styles.active}` 
                : `${styles.slide}`}
              >
                <QuizItem
                content={slide} 
                setAnswerList={setAnswerList} 
                countAnswer={countAnswer}>
                </QuizItem>
              </div>
            )
          }):
          // 퀴즈가 끝나면
          <div>
            <h3 className={styles.text}>퀴즈가 종료되었습니다!</h3>
            {isSubmitAnswer
            ?quizSummary
            :<Button className={styles.submit_button} label="제출하기" onClick={() => submitAnswer()}></Button>
            }
          </div>
        }
      </div>
      
      <div className={styles.btn_prevnext}>
        {slideCurrent>slideTotal
        ?(isSubmitAnswer?<Button label="홈으로"></Button>:<PrevButton prevEvent={() => slideLeft()}/>)
        :<PrevNextButton prevEvent={() => slideLeft()} nextEvent={() => slideRight()}/>
        }
      </div>
    </div>
  )
}
