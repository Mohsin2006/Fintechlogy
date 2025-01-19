import React from 'react'
import "./Latest.css"
import kyc from "../../Images/kyc.jpeg"
import peer from "../../Images/p2p-imgs.png"
import credit from "../../Images/how-credit-card-works.webp"
import setup from "../../Images/setup.jpeg"


const Latest = () => {
  return (
    <div className='latest'>
      <h2><span className="text-success border-bottom border-success">LATEST IN</span> FINTECH</h2>
      <div className='latest-posts'>
        <div className='latest-post'>
          <img src={kyc} alt='Post 1' />
          <h3>UAE Revolutionizes Finance with Digital KYC Platform</h3>
          <p>The United Arab Emirates (UAE) has taken a significant step toward modernizing its financial ecosystem with the launch of a digital Know Your Customer (KYC) platform under Federal Decree-Law No. 30 of 2024. This cutting-edge initiative is designed to streamline identity verification processes,</p> <p>enhance data security, and strengthen measures to combat financial crime. Regulated by the Central Bank of the UAE and overseen by a newly established entity, the platform is set to redefine how businesses and financial institutions manage customer data and meet compliance requirements.</p>
        </div>
        <div className='latest-post'>
          <img src={peer} alt='Post 2' />
          <h3>How to Start Peer-to-Peer Lending as a New Investor</h3>
          <p>Are you interested in starting peer-to-peer lending as a new investor? This modern investment form allows individuals to lend money directly to others while avoiding traditional financial institutions. It also provides possible attractive returns. In this blog post, we’ll look at what you need to know to confidently engage with peer-to-peer lending while understanding its mechanics, benefits, and risks.</p>

<p>You will learn how peer-to-peer lending platforms function, what benefits they have compared to traditional investments, plus the main strategies to boost your returns. If you want to diversify your investment portfolio or seek fixed-income options, this guide can help you make smart choices as you begin your peer-to-peer lending experience. With the right knowledge and approach, it is possible to take advantage of this thrilling investment option and be part of a growing group of smart lenders.</p>
        </div>
    <div className='latest-post'>
          <img src={credit} alt='Post 3' />
          <h3>Behind the Scenes – How do Credit Cards Work
          </h3>
          <p>You must have wondered how exactly the payments are processed when you swipe your debit/credit cards at the retail store for payment or submit your credit card details during the checkout process online. In this post, we’ll share the complete process on what happens after you swipe your credit card.</p>
    </div>

    <div className='latest-post'>
          <img src={setup} alt='Post 3' />
          <h3>The Rise of Contactless Payments – How Fintech is Revolutionizing Transactions
          </h3>
          <p>In recent years, the world of payments has undergone a transformative journey, with contactless payments emerging as a frontrunner in the realm of financial transactions.</p> <p>This article explores the evolution, impact, and future trends of contactless payments, analyzing their rise even before the COVID-19 pandemic, their current significance, and the potential they hold for shaping the future of consumer behavior.</p>
    </div>
    </div>
    </div>
  )
}

export default Latest
