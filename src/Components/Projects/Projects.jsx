import React, { useEffect, useState } from 'react'
import './Projects.css'
import ProjectsBanner from './ProjectsBanner'
import OnGoingProjects from './OnGoingProjects'
import UpcomingProjects from './UpcomingProjects'
import PreviousProjects from './PreviousProjects'
import WhyUs from './WhyUs'
import HomeNavbar from '../HomeNavbar'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import WhatsappAction from '../WhatsappAction'

const Projects = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('ongoing');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL
    if (location.hash) {
      // Wait a bit for the DOM to fully render
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ongoing':
        return <OnGoingProjects />;
      case 'upcoming':
        return <UpcomingProjects />;
      case 'completed':
        return <PreviousProjects />;
      default:
        return <OnGoingProjects />;
    }
  };

  return (
    <>
      <div className='Projects-mainpage'>
        <HomeNavbar />
        <ProjectsBanner activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Tab Content */}
        <div className='projects-tab-content'>
          {renderTabContent()}
        </div>

        {/* <WhyUs /> */}
      </div>
      <WhatsappAction/>
      <Footer />
    </>
  )
}

export default Projects