const Contact = () =>{
  
    return (
      <div className='cardHover'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",


          height: "100vh", // Full screen height
          backgroundColor: "#f0f2f5", // Light background
        }}
      >
        <div
          style={{
            fontFamily: "'Segoe UI', sans-serif",
            background: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            maxWidth: "700px",
            width: "90%",
            color: "#2d3436",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "34px",
              color: "#1e272e",
            }}
          >
            📬 Contact <span style={{ color: "#ff4b2b" }}>News-Monkey</span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              marginTop: "20px",
            }}
          >
            Have feedback, suggestions, or just want to say hi? We’d love to hear from you!
          </p>
          <ul
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              listStyle: "none",
              paddingLeft: 0,
            }}
          >
            <li>
              <strong>📧 Email:</strong>{" "}
              <a
                href="mailto:contact@newsmonkey.com"
                style={{ color: "#0077cc", textDecoration: "none" }}
              >
                contact@newsmonkey.com
              </a>
            </li>
            <li>
              <strong>🐦 Twitter:</strong>{" "}
              <a
                href="https://twitter.com/newsmonkey"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0077cc", textDecoration: "none" }}
              >
                @newsmonkey
              </a>
            </li>
            <li>
              <strong>🌐 Website:</strong>{" "}
              <a
                href="https://newsmonkey.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0077cc", textDecoration: "none" }}
              >
                www.newsmonkey.com
              </a>
            </li>
          </ul>
          <p style={{ marginTop: "20px", fontSize: "18px" }}>
            We respond to most queries within 24 hours. Your thoughts help us grow better!
          </p>
        </div>
      </div>
    );
  }


export default Contact;
