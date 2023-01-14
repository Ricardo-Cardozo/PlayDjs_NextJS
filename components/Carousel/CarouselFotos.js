import Image from 'next/image'
import BtnSlider from './BtnSlider'
import FotosData from './FotosData'
import { useState } from 'react'
import ButtonAmpliar from '../UIElements/ButtonAmpliar'

const CarouselFotos = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== FotosData.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === FotosData.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex -1) 
    } else if (slideIndex === 1) {
      setSlideIndex(FotosData.length)
    }
  }

  return (
   <>
    <div className='container_fotos'>
      {FotosData.map((obj, index) => {
        return (
            <div className={slideIndex === index + 1 ? 'slide active_anim' : 'slide'} key={index}>
              <Image 
                src={`/images/fotos/${index + 1}.jpg`} 
                fill 
                sizes='(max-width: 100%)' 
                alt='Fotos eventos'  
                className='img_fotos'
                priority
              />
          </div>
        )
      })}
      <BtnSlider moveLeft={prevSlide} moveRight={nextSlide}/>
    </div>
    <ButtonAmpliar/>
   </>
  )
}

export default CarouselFotos