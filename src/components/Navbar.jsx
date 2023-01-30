import React from 'react'
import { SceneMenu } from './Menu.tsx'
import "./navbar.css"

export const Navbar = () => {
  return (
    <div className='over'>
        <h1>Lightroom</h1>
        <SceneMenu/>
    </div>
  )
}
