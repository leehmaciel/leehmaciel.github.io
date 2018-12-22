import React, { Component } from 'react';
import './App.css';
import github from './assets/icons/github.svg';
import linkedin from './assets/icons/linkedin.svg';
import twitter from './assets/icons/twitter.svg';


export default App => 
  <div className='container'>

    <img className = 'container__pic' src='https://scontent.frec3-2.fna.fbcdn.net/v/t1.0-9/21762206_1514521645282497_8915309016766534079_n.jpg?_nc_cat=102&_nc_eui2=AeEB41HekPPchJke0XxR4waCMge0KYNOGUzq3ss4ZBP_VxE-eLktzPl2j7diMTL1UmmuEChaMM3KofCsCvULvPOgV-N6f3SnVgTsFVmgbX-_1A&_nc_ht=scontent.frec3-2.fna&oh=0a8a1345dbe447fc2676c3fd49a552d9&oe=5C999345' alt='profile picture of Letícia'>
    </img>

    <div className='container__infos'>

      <h1 className='infos__name'>
        Letícia Maciel
      </h1>

      <p className='infos__bio'>
        Cat ipsum dolor sit amet, russian blue and tomcat. Sphynx burmese but manx for american bobtail. Malkin tabby tabby himalayan for tomcat. Birman british shorthair but balinese so tom. Ocicat persian kitten, yet norwegian forest. Burmese. Lion egyptian mau ragdoll bobcat. American shorthair savannah scottish fold. Abyssinian munchkin ragdoll so birman british shorthair or bobcat yet sphynx. Cougar panther balinese , ocicat panther. Bobcat. Panther birman and bombay. Maine coon kitty so siberian for scottish fold. Kitty. American bobtail bombay scottish fold. Balinese savannah. 
      </p>

      <ul className='bio__list-social'>
        <li className='list-social__social'>
          <a className='social__icon' href ='https://github.com/leehmaciel' target='_blank'>
            <img src={github} alt='icon do Github'></img>
          </a>
        </li>

        <li className='list-social__social'>
          <a className='social__icon' href ='https://www.linkedin.com/in/let%C3%ADcia-maciel-578673172/' target='_blank'>
            <img src={linkedin} alt='icon do LinkedIn'></img>
          </a>
        </li>

        <li className='list-social__social'>
          <a className='social__icon' href ='https://twitter.com/leeehmaciel' target='_blank'>
            <img src={twitter} alt='icon do Twitter'></img>
          </a>
        </li>

      </ul>

    </div>

  </div>
