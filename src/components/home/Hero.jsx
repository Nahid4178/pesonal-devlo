import React from 'react'
import Typewriter from "typewriter-effect"
import { home } from "../data/data"

const Hero = () => {
  return (
    <>
    <section className="hero">
        {home.map((val,i) => (
            <div className="heroContent">
                <h3 className='fontSize' data-aos="fade-right">{val.text}</h3>
                <h1>
                    <Typewriter options= {{
                        strings: [`${val.name}`, `${val.post}`, `${val.design}`], autoStart: true, 
                    loop: true, }} />
                </h1>
                <p>{val.desc}</p>
                <button className="primaryBtn">
                    Get Your Best Class
                </button>
            </div>
        ))}
    </section>
      
    </>
  )
}

export default Hero