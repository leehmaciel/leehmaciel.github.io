import React, { Component } from 'react';
import './App.css';
import github from './assets/icons/github.svg';
import linkedin from './assets/icons/linkedin.svg';
import twitter from './assets/icons/twitter.svg';


export default App => 
  <div className='container'>

    <img className = 'container__pic' src='https://scontent.frec3-2.fna.fbcdn.net/v/t1.0-1/p160x160/18671099_1401866619881334_2747604445280256199_n.jpg?_nc_cat=110&_nc_eui2=AeF3B-M9RJf4uOT03IZqpEwpurmFpnMAoR3c8chghfSaQuKnErF8EXJ3flFsbY8bt3P2839ksm1iDT8P7xGYqcKwf0QWRWw9rNviygQbF6-FQA&_nc_ht=scontent.frec3-2.fna&oh=d09600e20bd53bf21c8927433135976b&oe=5C9C0F1D'>
    </img>

    <div className='container__infos'>

      <h1 className='infos__name'>
        Letícia Maciel
      </h1>

      <p className='infos__bio'>
        Cat ipsum dolor sit amet, russian blue and tomcat. Sphynx burmese but manx for american bobtail. Malkin tabby tabby himalayan for tomcat. Birman british shorthair but balinese so tom. Ocicat persian kitten, yet norwegian forest. Burmese. Lion egyptian mau ragdoll bobcat. American shorthair savannah scottish fold. Abyssinian munchkin ragdoll so birman british shorthair or bobcat yet sphynx. Cougar panther balinese , ocicat panther. Bobcat. Panther birman and bombay. Maine coon kitty so siberian for scottish fold. Kitty. American bobtail bombay scottish fold. Balinese savannah. British shorthair grimalkin tom but birman. Havana brown cornish rex. Cornish rex balinese american shorthair for leopard. Cornish rex devonshire rex yet donskoy and lion. American bobtail bobcat singapura jaguar so burmese. Lion. 
      </p>

      <ul className='bio__list-social'>
        <li className='list-social__social'>
          <a className='social__icon' href ='https://github.com/leehmaciel' target='_blank'>
            <img src={github}></img>
          </a>
        </li>

        <li className='list-social__social'>
          <a className='social__icon' href ='https://www.linkedin.com/in/let%C3%ADcia-maciel-578673172/' target='_blank'>
            <img src={linkedin}></img>
          </a>
        </li>

        <li className='list-social__social'>
          <a className='social__icon' href ='https://twitter.com/leeehmaciel' target='_blank'>
            <img src={twitter}></img>
          </a>
        </li>

      </ul>

    </div>

  </div>
