import React, { useEffect } from 'react'
import WhyedificeLeadership from './WhyedificeLeadership'
import './whyedifice.css'
import AskSection from './AskSection'
import WhyedificeBanner from './WhyedificeBanner'
import AboutUs from './AboutUs'
import Footer from '../Footer'
import HomeNavbar from '../HomeNavbar'
import RecentProjects from './RecentProjects'
import WhatsappAction from '../WhatsappAction'
import MilestoneTimeline from './MilestoneTimeline'
const Whyedifice = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <div className='WhyEdifice-main-page'>
        <HomeNavbar />
        <WhyedificeBanner />
        <AboutUs />
        {/* <RecentProjects /> */}
        {/* <WhyedificeLeadership /> */}
        <MilestoneTimeline />
        <AskSection />
        <WhatsappAction/>
        <Footer />
      </div>
    </>
  )
}

export default Whyedifice