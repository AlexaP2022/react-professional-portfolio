import React from 'react';
import './portfolio.scss';
import digitalMarketingpic from '../../Assets/images/digital-marketing-meeting.jpg';
import mmatb from '../../Assets/images/meet-me-at-the-bark.png';
import recipeat from '../../Assets/images/RecipEat.png'

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>Portfolio</h1>
      <p>A selection of my featured work</p>
      <br></br>
      <h4>Refactored Digital Marketing Website</h4>
      <figure>
        <a href="https://alexap2022.github.io/Challenge_1_AP/" target="_blank">
          <img src={digitalMarketingpic}
            className='dmimg' alt="brainstorming meeting of developers in market research"></img>
        </a>
      </figure>
      <br></br>
      <h4>Meet Me At the Bark - a social networking site for dog owners and their pets</h4>
      <br></br>
      <figure>
        <a href="https://young-ocean-59194.herokuapp.com/" target="_blank">
          <img src={mmatb}
            className='dmimg' alt="Meet Me At the Bark Main Landing Page"></img>
        </a>
      </figure><br></br>
      <h4>RecipEat - a recipe search engine based on user entered ingredients</h4>
      <figure><br></br>
        <a href="https://alexap2022.github.io/RecipEat/" target="_blank">
          <img src={recipeat}
            className='dmimg' alt="RecipEat Main Landing Page"></img>
        </a>
      </figure>
      
   
    </div>
  )
}
