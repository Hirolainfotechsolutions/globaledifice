import React, { useEffect } from 'react'
import HomeNavbar from './HomeNavbar'
import "./Home.css"
import HomeBanner from './HomeBanner'
import HomeAboutus from './HomeAboutus'
import HomeProjects from './HomeProjects'
import Blogs from './Blogs'
import OurStrengths from './OurStrengths'
import Footer from './Footer'
import Testimonials from './Testimonials'
import HomeWhyChoose from './HomeWhyChoose'
import WhyUs from './Projects/WhyUs'
import HomeNewBanner from './HomeNewBanner'
import HomePageIntro from './HomePageIntro'
import WhatsappAction from './WhatsappAction'
import HomeAboutUsNew from './HomeAboutUsNew'
const Homepage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return (
        <>
            <div className='Homepage-main-parent'>
                {/* <HomeNavbar /> */}
                {/* <HomeBanner/> */}
                <HomeNewBanner />
                {/* <HomeAboutus/> */}
                <HomeAboutUsNew />
                <HomePageIntro/>
                <WhyUs />
                <HomeProjects/>
                {/* <HomeWhyChoose /> */}
                <Testimonials/>
                <Blogs/>
                <OurStrengths/>
                <WhatsappAction/>
                <Footer/>
            </div>
        </>

    )
}

export default Homepage