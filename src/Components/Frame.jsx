import React from 'react'
import Canvas from './Canvas'
import './Frame.css'
import "../App.css"

export const Frame = () => {
    return (
        <div className="main">
           <h1>Ray Caster - 1010 Richards Stairwell</h1>
           <Canvas id="mainCanvas"></Canvas>

        </div>
    )
}
