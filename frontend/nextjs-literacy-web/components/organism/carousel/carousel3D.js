import { useState } from "react"
import Button from "../../atom/buttons/button"
import styles from './Carousel3D.module.css'


export default function Carousel3D() {

  const cellCount = 6;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const rotateCarousel = () => {
    const angle = (selectedIndex / cellCount) * -360
    //carousel.style.transform = 'translateZ(-346px) rotateY(' + angle + 'deg)'
  }

  const prevButtonClick = (e) => {
    setSelectedIndex(selectedIndex - 1);
    rotateCarousel()
  }
  const nextButtonClick = (e) => {
    setSelectedIndex(selectedIndex + 1);
    rotateCarousel()
  }

  // const prevButton = get('.prev_button')
  // prevButton.addEventListener('click', () => {
  //   setSelectedIndex(selectedIndex - 1)
  //   rotateCarousel()
  // })

  // const nextButton = get('.next_button')
  // nextButton.addEventListener('click', () => {
  //   setSelectedIndex(selectedIndex + 1)
  //   rotateCarousel()
  // })


  
  return (
    <div className={styles.wrap}>
      <h2>3D Carousel</h2>
      <div className="styles.container">
        <div className="styles.carousel">
          <div className={styles.item}>
            <img src="https://picsum.photos/id/237/400/300" alt="A" />
          </div>
          <div className={styles.item}>
            <img src="https://picsum.photos/id/238/400/300" alt="B" />
          </div>
          <div className={styles.item}>
            <img src="https://picsum.photos/id/239/400/300" alt="C" />
          </div>
          <div className={styles.item}>
            <img src="https://picsum.photos/id/240/400/300" alt="D" />
          </div>
          <div className={styles.item}>
            <img src="https://picsum.photos/id/241/400/300" alt="E" />
          </div>
          <div className={styles.item}>
            <img src="https://picsum.photos/id/242/400/300" alt="F" />
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button types="" label="이전" onClickEvent={() => prevButtonClick()}></Button>
        <Button types="" label="다음" onClickEvent={() => nextButtonClick()}></Button>
      </div>
    </div>
  )
}