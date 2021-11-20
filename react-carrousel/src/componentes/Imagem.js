import React,{useState} from 'react'
import {CarouselData} from './CarouselData'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

const Imagem = (slides) => {
    const [current, setCurrent]= useState(0)
    const length=slides.length
 
    const proxSlide=()=>{
        setCurrent(current===length -1 ? 0: current +1)
        
    }
    const antSlide = ()=> {
        setCurrent (current=== 0 ? length -1 :current-1)
    }

 if (!Array.isArray(slides)|| slides.length<=0){
     return null
 }


    return (
      <section className="slider">
          <FaArrowAltCircleLeft className="seta-esquerda" onClick={antSlide} />
          <FaArrowAltCircleRight className="seta-direita" onClick={proxSlide} />
      {CarouselData.map((slide, index)=> {
 return( <div className={index=== current? "slide-acrive":"slide"} key={index}>
     {index=== current && (<img src={slide.image } alt="Puppys Pics" className="imagem"/>)}
       
      </div>
   )
})}
      </section>
    )
    }

export default Imagem
