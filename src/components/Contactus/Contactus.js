import React from 'react'
import "./Contactus.css"
const Contactus = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.text}>
        Have any questions or need assistance? Reach out to us, and our team will be happy to help!
      </p>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
          required
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here"
            rows="5"
            style={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </section>
  )
}

const styles = {
    container: {
      padding: "40px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "600px",
      margin: "20px auto",
      textAlign: "center",
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "20px",
      color: "#333",
    },
    text: {
      fontSize: "1rem",
      marginBottom: "20px",
      color: "#555",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    formGroup: {
      textAlign: "left",
    },
    label: {
      fontSize: "1rem",
      color: "#444",
      marginBottom: "5px",
      display: "block",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #ddd",
      fontSize: "1rem",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #ddd",
      fontSize: "1rem",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      color: "#fff",
      backgroundColor: "#007BFF",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };
export default Contactus
