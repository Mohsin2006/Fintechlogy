import React from 'react'
import "./About.css"
const Aboutus = () => {
  return (
    <section style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>About Fintechlogy</h1>
        <p style={styles.text}>
          At <strong>Fintechlogy</strong>, we are committed to revolutionizing the financial world 
          with cutting-edge technology. Our mission is to empower individuals 
          and businesses by providing innovative, efficient, and user-friendly 
          financial solutions that drive growth and prosperity.
        </p>
        <p style={styles.text}>
          Whether it's seamless payments, smart investment tools, or robust 
          security, Fintechlogy is designed to make financial management easier 
          and more accessible for everyone. Join us as we reshape the future 
          of finance, one innovation at a time.
        </p>
      </div>
    </section>
  )
}

const styles = {
    container: {
      padding: "40px",
      backgroundColor: "#f4f6f9",
      textAlign: "center",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      margin: "20px auto",
    },
    content: {
      margin: "0 auto",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "20px",
      color: "#333",
    },
    text: {
      fontSize: "1.2rem",
      color: "#555",
      lineHeight: "1.6",
    },
  };
export default Aboutus
