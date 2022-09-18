import React from 'react';
import './intro.scss';
import profilepic from '../../Assets/images/profilepic.png'

export default function Intro() {
  return (
    <div className='intro'>
      <img src={profilepic}
        className='profilepic' alt="Watercolor painting of Alexa Punzalan's avatar"></img>
      <p>Hello and thank you for visiting my portfolio! </p>
      <p>My name is Alexa Punzalan and I am a California native currently living in Los Angeles. I received a Bachelor's of Arts degree in Psychology from the University of California at Los Angeles. My husband and I lived in NYC for almost 8 years where my career was based primarily in hospital research and administration. We moved back to California in the Fall of 2019 when our son was about 10 months old and the constraints of city living began to take it's toll. We hoped that our son would benefit from being close to family until the pandemic hit a few months after and I took on the role of stay-at-home parent. With the world slowly creeping out of the pandemic, my son is now enrolled in pre-school and I have found myself exploring other career options that feel more in-line with my interests and passions. In the Spring of 2022, I enrolled in the UCLA Extension Coding Bootcamp and I hope to rejoin the workforce as a full-stack web developer.</p>
      <p>Here you'll find a collection of my selected coding bootcamp work, my most recent resume, and contact information.  Please do not hesitate to reach out if you have any questions!  I look forward to hearing from you!</p>
    </div>
  )
}
