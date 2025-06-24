import React, { useEffect } from 'react'
import ContactBanner from './ContactBanner'
import '../Projects/Projects.css'
import HomeNavbar from '../HomeNavbar'
import Footer from '../Footer'
import './contact.css'
import ContactForm from './ContactForm'
import WhatsappAction from '../WhatsappAction'
const Contactus = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <div className='Contactus-main-parent'  style={{ backgroundImage: `url('/contactbackground.png')`,backgroundRepeat:"no-repeat" }}>
        <HomeNavbar/>
        <ContactBanner/>
        <ContactForm/>
    </div>
    <WhatsappAction/>
        <Footer/>
    </>
  )
}

export default Contactus