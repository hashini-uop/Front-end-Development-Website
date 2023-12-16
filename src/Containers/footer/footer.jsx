import React from 'react'
import './footer.css'
import img from '../../assests/Images/White Logo.png'
export default function Footer() {
  return (
    <div class="footer section-padding">
      <div className="footer-links">
        <div className="logo-container">
          <div className="logo">
            <img src={img} alt="logo" />
          </div>
          <div className="text">
            <h3>Your goal is our target. Not anything in between. We use online marketing platforms
              and tools to achieve single objective - your business results.</h3>
          </div>
        </div>

        <div className="links-container">
          <h4>Our Technologies</h4>
          <p href="#">ReactJS</p>
          <p href="#">Gatsby</p>
          <p href="#">NextJS</p>
          <p href="#">NodeJS</p>
          <p href="#">GraphQL</p>
          <p href="#">Laravel</p>
        </div>
        <div class="links-container">
          <h4>Our Services</h4>
          <p href="#">Social Media Marketing</p>
          <p href="#">Web & Mobile App Development</p>
          <p href="#">Data & Analytics</p>
          <p href="#">Google Marketing Solutions</p>
          <p href="#">Search Engine Optimization</p>
        </div>
      </div>
      <div className="copyright-test">
        <hr style={{ width: '50%', marginLeft: "400px" }} />
        <h3>Privacy Policy | Terms & Condition</h3>
      </div>
    </div>

  )
}
