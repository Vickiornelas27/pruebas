'use client'
import { useEffect } from 'react'
import styled from './DarkMode.module.css'
import 'material-symbols'

const DarkMode = () => {
  useEffect(() => {
    const darkModeToggle = document.getElementById('dark-mode-toggle')
    const body = document.body

    darkModeToggle.addEventListener('change', () => {
      body.classList.toggle('dark-mode')
    })
  }, [])

  return (
    <div>
      <div className={styled.darkModeSwitch}>
        <input type='checkbox' id='dark-mode-toggle' />
        <label htmlFor='dark-mode-toggle'></label>
      </div>
    </div>
  )
}

export default DarkMode
