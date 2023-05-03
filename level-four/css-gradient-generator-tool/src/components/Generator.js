import React, { useState, useEffect } from 'react';
import ResultsSection from "./ResultsSection"
import OptionsForm from "./OptionsForm"

export default function Generator(props) {
    const [color1, setColor1] = useState('');
    const [color2, setColor2] = useState('');
    const [gradientType, setGradientType] = useState('');
    const [gradientDirection, setGradientDirection] = useState('');
    const [anglePercent, setAnglePercent] = useState(0);
    const {gradientCSS} = props
    
  const handleColor1Change = (event) => {
    setColor1(event.target.value);
  }

  const handleColor2Change = (event) => {
    setColor2(event.target.value);
  }

  const handleGradientTypeChange = (event) => {
    setGradientType(event.target.value);
    console.log(event)
  }

  console.log(handleGradientTypeChange)

  const handleGradientDirectionChange = (event) => {
    setGradientDirection(event.target.value);
  }
  

  const handleAnglePercentChange = (event) => {
    setAnglePercent(event.target.value);
  }

  useEffect(() => {
    if (gradientType === 'linear') {
        setGradientDirection('to right');
        setAnglePercent(0);
    }
}, [gradientType]);

  return (
    <div className="generator-main container">
      <OptionsForm
        color1={color1}
        color2={color2}
        gradientType={gradientType}
        gradientDirection={gradientDirection}
        handleColor1Change={handleColor1Change}
        handleColor2Change={handleColor2Change}
        handleGradientTypeChange={handleGradientTypeChange}
        handleGradientDirectionChange={handleGradientDirectionChange}
        anglePercent={anglePercent}
        handleAnglePercentChange={handleAnglePercentChange}
      />
      <ResultsSection 
        color1={color1}
        color2={color2}
        gradientType={gradientType}
        gradientDirection={gradientDirection}
        anglePercent={anglePercent}
        handleAnglePercentChange={handleAnglePercentChange}
        gradientCSS={gradientCSS}
      />
    </div>
  )
}
