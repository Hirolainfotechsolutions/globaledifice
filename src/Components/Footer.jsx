import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation to sections on different pages
  const handleSectionNavigation = (path, section) => {
    // Navigate programmatically to ensure complete page reload
    navigate(path);

    // Set a flag in session storage to indicate which section to scroll to after navigation
    sessionStorage.setItem("scrollToSection", section);
  };
  return (
    <>
      <div className="Footer-main-parent">
        <div className="Footer-sub-parent">
          <div className="container-fluid">
            <div className="row footercontent">
              <div className="col-md-3">
                <div className="footer-img">
                  <img
                    className="footerlogo"
                    src="/LogoWhiteNew.png"
                    alt="footerlogo"
                  />
                </div>
                <div className="footer-about-company">
                  <p>
                    At Global Edifice, we are dedicated to quality construction
                    and innovative design, shaping Bangalore’s real estate
                    landscape with excellence. Our focus spans the wide range
                    residential projects, where we blend modern living with
                    sustainable practices. With meticulous attention to detail
                    and a commitment to customer satisfaction, we strive to
                    create spaces that elevate lifestyles and stand the test of
                    time.
                  </p>
                </div>
                <div className="Footer-social-links">
                  <div className="Footer-social-icons">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=61552003201893">
                      <img src="/facebook.svg" alt="" />
                    </a>
                  </div>
                  <div className="Footer-social-icons">
                    <a target="_blank" href="https://twitter.com/globaledifice">
                      <img src="/twitter.svg" alt="" />
                    </a>
                  </div>
                  <div className="Footer-social-icons">
                    <a target="_blank" href="https://www.youtube.com/">
                      <img src="/youtube.png" alt="" />
                    </a>
                  </div>
                  <div className="Footer-social-icons">
                    <a target="_blank" href="https://www.instagram.com/globaledifice/?next=%2F&hl=en">
                      <img src="/instagram.svg" alt="" />
                    </a>
                  </div>
                  <div className="Footer-social-icons">
                    <a target="_blank" href="https://www.linkedin.com/company/99212957/admin/dashboard/">
                      <img src="/linkedin.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-2 pt-5">
                <div className="footer-links">
                  <div className="links-heading">
                    <h5>Upcoming Projects</h5>
                  </div>
                  <div className="row quick-links">
                    <a onClick={() => handleSectionNavigation('/projects#UpcomingProjects', 'UpcomingProjects')} style={{ cursor: 'pointer' }} >The Koh-i-Nur</a>
                    <a onClick={() => handleSectionNavigation('/projects#UpcomingProjects', 'UpcomingProjects')} style={{ cursor: 'pointer' }} >The Regent</a>
                    <a onClick={() => handleSectionNavigation('/projects#UpcomingProjects', 'UpcomingProjects')} style={{ cursor: 'pointer' }} >The Florentine</a>
                    <a onClick={() => handleSectionNavigation('/projects#UpcomingProjects', 'UpcomingProjects')} style={{ cursor: 'pointer' }} >The Orlov</a>
                    <a onClick={() => handleSectionNavigation('/projects#UpcomingProjects', 'UpcomingProjects')} style={{ cursor: 'pointer' }} >The Dresden</a>
                    <a onClick={() => handleSectionNavigation('/projects#UpcomingProjects', 'UpcomingProjects')} style={{ cursor: 'pointer' }} >The Centenary</a>
                    <a onClick={() => handleSectionNavigation('/projects#UpcomingProjects', 'UpcomingProjects')} style={{ cursor: 'pointer' }} >The Orloff</a>
                  </div>
                </div>
              </div> */}
              <div className="col-md-2 pt-5">
                <div className="footer-links">
                  <div className="links-heading">
                    <h5>Ongoing Projects</h5>
                  </div>
                  <div className="row quick-links">
                    <a href="/ongoing-project-details/orlean-in-chandapura-bangalore">
                      Global Edifice Orlean
                    </a>
                    <a href="/ongoing-project-details/legacy-in-chandapura-bangalore">
                      Global Edifice Legacy
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-2 pt-5">
                <div className="footer-links">
                  <div className="links-heading">
                    <h5>Quick Links</h5>
                  </div>
                  <div className="row quick-links">
                    <a href="/">Home</a>
                    <a href="/projects#OngoingProjects">Ongoing Projects</a>
                    <a href="/projects#UpcomingProjects">Upcoming Projects</a>
                    <a href="/projects#CompletedProjects">Completed Projects</a>
                    <a href="/about-us">About Us</a>
                    <a href="/blogs">Blogs</a>
                    <a href="/contact-us">Contact Us</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 pt-5">
                <div className="footer-links">
                  <div className="links-heading">
                    <h5>Contact Us</h5>
                  </div>
                  <div className="row contactaddress">
                    <a href="mailto:sales@globaledifice.in">
                      <div className="row">
                        <img
                          className="icons-img"
                          src="/mail-icon.png"
                          width={"18"}
                          height={"20"}
                          alt="mailicon"
                        />
                        <p>sales@globaledifice.in</p>
                      </div>
                    </a>
                    <a href="tel:+91 900 832 4444">
                      <div className="row">
                        <img
                          className="icons-img"
                          src="/call-icon.png"
                          width={"18"}
                          height={"20"}
                          alt="mailicon"
                        />
                        <p>+91 900 832 4444</p>
                      </div>
                    </a>
                    <a href="">
                      <div className="row">
                        <img
                          className="icons-img"
                          width={"18"}
                          height={"20"}
                          src="/location-icon.png"
                          alt="mailicon"
                        />
                        <p className="address-text">
                          966, 3rd Floor, 27th Main, 8th Cross Rd, 1st Sector,
                          HSR Layout, Bangalore, Karnataka 560102
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="copyrights-section d-flex justify-content-between">
              <p>© 2025 Global Edifice. All rights reserved.</p>
              <p>
                Designed and developed by
                <a target="_blank" href="https://hirolainfotech.com/">
                  {" "}
                  Hirola InfoTech Solutions Pvt Ltd.
                </a>
              </p>
              <div className="d-flex gap-3">
                <p>
                  <Link to="/termsandconditions">Terms of Use</Link>
                </p>
                <p>
                  <Link to="/privacy-policy">Privacy-policy</Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
