import React from 'react'

function IntroText({text,className}) {
  return (
    <>
      <p className={`text-center pt-4 sm:pt-12 font-medium  text-sm md:text-sm md:w-[50%] w-[80%] text-yellow-400 mx-auto ${className}`}>
        "{text}"
      </p>
    </>
  )
}

export default IntroText