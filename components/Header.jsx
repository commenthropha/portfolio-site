import React, {useState} from 'react';
import styles from '../styles/Header.module.css';
import ReactTypingEffect from 'react-typing-effect';


const Header = () => {
    return (
      <div className={styles.site__header}>
        <h1>
            Hey, I'm <ReactTypingEffect
            text={["Anees Haroon.", "a full-stack web developer.", "a Computer Science undergraduate."]} 
            eraseDelay = {3000}
            typingDelay = {0}
            speed = {100}
            eraseSpeed = {100}
            />
        </h1>
      </div>
    )
  }
  
  export default Header