import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "../Slider/Dots";
import "./slider.css";
import { Sliders } from "./sliderImage";
const len = Sliders.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={Sliders} />
     
      <Dots
        activeIndex={activeIndex}
        sliderImage={Sliders}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
