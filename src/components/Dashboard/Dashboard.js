import React from 'react'
import "./Dashboard.css"
const Dashboard = () => {
  return (
    <div >
      <div className='dashboard text-white  fw-bold'>
        <h2>Fintechlogy</h2>
        <p>Welcome to the Fintechlogy dashboard! , Here you can have all reports according to the time and payments.</p>
      </div>
      <div>
        <h2><apan className="border-bottom border-success" >Fintechlogy</apan> Defination</h2>
        <p>Fintech (short for Financial Technology) refers to the integration of technology into the financial services industry to enhance and automate financial processes. It involves the use of advanced technology, such as software, algorithms, and apps, to provide financial services efficiently and innovatively.
        Fintech is revolutionizing the financial industry by making services faster, more accessible, and user-friendly, while often reducing costs and improving efficiency.
        </p>
        <h2>Key Areas of <span className="border-bottom border-success">Fintech</span></h2>
        <ul className='under text-start d-flex flex-wrap'>
            <li>Financial Data Analysis</li>
            <li>Digital Wallets</li>
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Blockchain and Decentralized Ledgers</li>
            <li>Payment Processing</li>
            <li>Consumer Electronics and IoT</li>
            <li>Payments and Transactions</li>
            <li>Insurance and Risk Management</li>
            <li>Banking and Lending</li>
            <li>E-commerce and Online Marketing</li>
            <li>Telecommunications and Telemedicine</li>
            <li>Sustainability and Environmental Conservation</li>
            <li>Cryptocurrency and Blockchain</li>
            <li>Cybersecurity and Digital Forensics</li>
            <li>Consumer Protection and Regulation</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
