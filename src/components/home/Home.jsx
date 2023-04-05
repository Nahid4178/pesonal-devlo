import React from 'react'

import About from '../pages/About'
import { Blog } from '../pages/Blog'
import { Contact } from '../pages/Contact'
import { Counter } from '../pages/Counter'
import { Services } from '../pages/Service'
import Hero from './Hero'

const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Counter />
    <Blog />
    <Contact />
    </>
  )
}

export default Home