import React from 'react'
import "./Advantage.css"
import benifits from "../../Images/benifits-fintech.webp"
const Advantage = () => {
  return (
    <div className='advantage'>
      <h2><span className="text-success border-bottom border-success">ADVANTAGES OF</span> FINTECHLOGY</h2>
      <p>Fintech, short for financial technology, refers to the integration of technology into financial services to improve their efficiency, accessibility, and user experience. It is transforming the way businesses and individuals handle money, invest, and access financial services. Here are the key advantages of fintech:</p>
    <div>
      <div className='advantage-item'>
        <img src={benifits} alt='Advantage 1' />
      </div>
    </div>

    </div>
  )
}

export default Advantage
