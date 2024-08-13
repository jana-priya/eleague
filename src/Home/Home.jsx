import React from 'react';
import Slider from '../Components/Slider/Slider';
import {Cards} from '../Components/Cards/Cards';
import {Footer} from '../Components/Footer/Footer';
export const Home = () => {
  return (
    <div>
      <Slider/>
      <Cards/>
      <Footer/>
    </div>
  )
}
