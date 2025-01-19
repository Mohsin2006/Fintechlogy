import React from 'react'
import "./Technology.css"
import blockchain from "../../Images/Blockchain.png"
import ai from "../../Images/ai ml.jpg"
import iot from "../../Images/iot.png"
import quantum from "../../Images/quantum-computing.png"
import cloud from "../../Images/cloudComputing.png"
import api from "../../Images/api.webp"
import arvr from "../../Images/arvr.jpg"
import mobile from "../../Images/mobile.webp"
import regtech from "../../Images/regtech.jpg"
import cyber from "../../Images/Cyber-Security.png"
import robotics from "../../Images/robotics.jpg"
import ml from "../../Images/ml.png"


const Technology = () => {
  return (
    <div className='technology'>
      <h1>Technology</h1>
      <p>The fintech industry leverages a wide range of technologies to provide innovative financial services, improve efficiency, enhance security, and deliver better customer experiences. Key technologies used in fintech include:</p>
      <ul className='technology-list'>
        <li className='card'>
            <img src={blockchain} alt=''/>
            Blockchain
            </li>
        <li className='card'>
        <img src={ai} alt=''/>

            Machine Learning</li>
        <li className='card'>
        <img src={ml} alt=''/>

            Artificial Intelligence</li>
        <li className='card'>
        <img src={iot} alt=''/>

            Internet of Things</li>
        <li className='card'>
        <img src={quantum} alt=''/>

            Quantum Computing</li>
        <li className='card'>
        <img src={cloud} alt=''/>

            Cloud Computing</li>
        <li className='card'>
        <img src={api} alt=''/>

            APIs (Application Programming Interfaces)
        </li>
        <li className='card'>
        <img src={arvr} alt=''/>

            AR VR</li>
        <li className='card'>
        <img src={mobile} alt=''/>

            Mobile Technology
        </li>
        <li className='card'>
        <img src={regtech} alt=''/>

            RegTech (Regulatory Technology)
        </li>
        <li className='card'>
        <img src={cyber} alt=''/>

            Cyber Security</li>
        <li className='card'>
        <img src={robotics} alt=''/>

            Robotic Process Automation (RPA)
        </li>
      </ul>
      <p>These technologies enable fintech companies to build scalable, secure, and reliable financial systems. By leveraging these technologies, fintech companies can achieve faster, more efficient, and more cost-effective financial services, while also improving customer experience and reducing risks.</p>
      <h2>Examples of Fintech Companies</h2>
      <ul className='technology-list'>
        <li>Mastercard</li>
        <li>Visa</li>
        <li>Google Pay</li>
        <li>Square</li>
        <li>PayPal</li>
        <li>Apple Pay</li>
        <li>Google Wallet</li>
        <li>Snap</li>
        <li>PayPal</li>
        <li>Google Pay</li>
        <li>Square</li>
      </ul>
      <p>Fintech companies are using these technologies to create innovative, secure, and efficient financial services that empower individuals, businesses, and governments to achieve their financial goals.</p>
      <h2>Reasons to Choose Fintech</h2>
      <ul className='technology-list'>
        <li className='card'>Efficiency and Cost-Effectiveness</li>
        <li className='card'>Improved Customer Experience</li>
        <li className='card'>Enhanced Security</li>
        <li className='card'>Access to Financial Services</li>
        <li className='card'>Reduced Risks</li>
        <li className='card'>Greater Innovation</li>
        <li className='card'>Lower Operational Costs</li>
        <li className='card'>Better Compliance</li>
        <li className='card'>Better Customer Service</li>
        <li className='card'>Greater Market Penetration</li>
        <li className='card'>Greater Financial Growth</li>
        <li className='card'>Greater Financial Stability</li>
        <li className='card'>Greater Financial Literacy</li>
        <li className='card'>Greater Financial Independence</li>
        <li className='card'>Greater Financial Opportunity</li>
        <li className='card'>Greater Financial Security</li>
      </ul>
    </div>
  )
}

export default Technology
