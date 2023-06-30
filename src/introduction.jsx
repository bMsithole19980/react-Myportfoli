import React from 'react'
import './Introduction.css'

function Introduction() {
  return (
    <div className='intro'>
        <div className='intro-left'>
            <img src='/images/bongza.jpg' alt='Myself'></img>
            
        </div>
        <div className='intro-right'>
        <div className='intro-name'>
                  <span>Hi I am </span>
                  <span>Bongani Sithole </span>
                  <span>Software Developer with good technical skills
                      in web and software development
                      both front-end and back-end
                  </span>
                 
            </div>
            <div className='intro-icons'>
            <button className=' button intro-button'>Connect me</button>
            <button ><i class="uil uil-facebook-f"></i></button>
            <button ><i class="uil uil-linkedin"></i></button> 
            <button ><i class="uil uil-instagram-alt"></i></button>
            <button ><i class="uil uil-at"></i></button>  
                
            </div>


        </div>


        

    </div>
  )
}

export default Introduction;