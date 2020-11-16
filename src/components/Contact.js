import React from 'react'
import "./Contact.css"
export default function Contact() {
    return (
        <div class="ContactForm">
            <form>
            <div class="Inputs"> 
                 <label for="EmailInput">TITLE HERE</label>    
                    <input placeholder="email" id ="EmailInput"/> 
            </div> 
            <div class="Inputs" >  <label for="MessageInput">Say what you want</label>
                    <input   placeholder="message "id ="MessageInput"/>  
            </div> 
            <div class="Inputs">  CAPTCHA <input/>
                     <button/>
              </div> 

            </form>
            
        </div>
    )
}
