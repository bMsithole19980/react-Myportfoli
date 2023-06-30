import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-wrapper'>
        <div className='nav-left'>
            <div className='nav-name'>Bongani.</div>
            
        </div>
        <div className='nav-right'>
            <div className='nav-list'>
                <ul style={{listStyleType:'none'}}>
                    <li ><i class="uil uil-estate"></i>Home</li>
                    <li><i class="uil uil-bag"></i>Portfolio</li>
                    <li><i class="uil uil-user"></i>About me</li>
                    <li><i class="uil uil-folder-network"></i>Project</li>
                    <li><i class="uil uil-file-contract"></i>Contacts</li>
                </ul>
            </div>
        </div>
        


    </div>
  )
}

export default Navbar