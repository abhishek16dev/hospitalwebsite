import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer_parent'>
      <div>

      <h6>Medical</h6>
      <p className='para'>Leading the Way in Medical <br/>
         Execellence, Trusted Care.</p>

      </div>

      <div>
      <h6>Important Links</h6>
      <ul>
        <li> Appointment</li>
        <li> Doctor </li>
        <li> Service</li>
        <li> About us</li>
      </ul>


      </div>

      <div>
      <h6>Contact Us</h6>
      <ul>
        <li> Call: (237) 681-812-255</li>
        <li> Email: fildineesoe@gmail.com </li>
        <li> Address: 0123 Some place</li>
        <li> Some country</li>
      </ul>


      </div>
      <div>
      <h6>Newsletter</h6>
      <ul>
        <li> Appointment</li>
        <li> Doctor </li>
        <li> Service</li>
        <li> About us</li>
      </ul>

      </div>
      
      </div>

      <hr className='line'></hr>

      <div className='copywright'>
        <div>    
           <span> © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD   </span>  
           
        </div>


         <div className='social_wrap'> 
         

         </div>

      </div>

    </div>
  )
}

export default Footer
