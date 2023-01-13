import Image from 'next/image'
import Link from 'next/link'
import BtnSlider from './BtnSlider'
import SliderData  from './SliderData'
import { useState } from 'react'

const CarouselComponent = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== SliderData.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === SliderData.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex -1) 
    } else if (slideIndex === 1) {
      setSlideIndex(SliderData.length)
    }
  }

  return (
   <div className='container_slider'>
    {SliderData.map((obj, index) => {
      return (
        <div className={slideIndex === index + 1 ? 'slide active_anim' : 'slide'} key={index}>
          <div className='items_corousel'>
            <Image src={`/images/${index + 1}.png`} width='80' height='80' alt=''/>
            <h1>{obj.nome}</h1>
            <p>{obj.mensagem}</p>
          </div>
        </div>
      )
    })}
    <BtnSlider moveLeft={prevSlide} moveRight={nextSlide}/>
   </div>
  )
}

export default CarouselComponent