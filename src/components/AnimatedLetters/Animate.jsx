import React from 'react'
import "./Animate.scss"

export default function 
Animate({letterClass, strArray, idx}) {
  return (
    <span>
        {
            strArray.map((char, i) =>(
                <span key={char +i} className={`${letterClass} _${i +idx}`}>
                    {char}
                </span>
            ))
        }
    </span>
  )
}
