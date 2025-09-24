import React, { Component } from 'react';

const About = () => {
  
    return (
      <div className='cardHover'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(to right, #fdfbfb, #ebedee)",
        }}
      >
        <div
          style={{
            fontFamily: "'Segoe UI', sans-serif",
            background: "#fff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            color: "#333",
            maxWidth: "900px",
            width: "90%",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#22223b",
              fontSize: "36px",
            }}
          >
            🔍 About <span style={{ color: "#ff4b2b" }}>News-Monkey</span>
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.8, marginTop: "20px" }}>
            <strong>News-Monkey</strong> is a modern and dynamic news platform crafted for curious
            minds. We deliver breaking news and top headlines from all around the world, categorized
            for your convenience — be it <em>technology, science, health, entertainment, business,
            or sports</em>.
          </p>
          <p style={{ fontSize: "18px", lineHeight: 1.8 }}>
            Built with 💙 <strong>React.js</strong> and powered by{" "}
            <a
              href="https://newsapi.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007acc", textDecoration: "none" }}
            >
              NewsAPI
            </a>
            , News-Monkey ensures a smooth, real-time, and mobile-friendly experience. With fast
            loading, clean design, and intuitive navigation — it’s like reading the news with
            superpowers!
          </p>
          <p style={{ fontSize: "18px", lineHeight: 1.8 }}>
            Whether you're a student, a professional, or just a news junkie — News-Monkey is
            tailored to keep you informed, fast and easy.
          </p>
        </div>
      </div>
    );
  }


export default About;
