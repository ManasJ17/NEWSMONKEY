
const Home = ()=> {

    return (
      <div className='cardHover'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f4f4f8",
        }}
      >
        <div
          style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            maxWidth: "800px",
            width: "90%",
            color: "#333",
          }}
        >
          <h2
            style={{
              color: "#1a1a2e",
              fontSize: "32px",
              textAlign: "center",
            }}
          >
            📰 Welcome to <span style={{ color: "#ff4b2b" }}>News-Monkey</span>!
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
            <strong>News-Monkey</strong> is your one-stop destination for lightning-fast, reliable,
            and categorized news updates from around the globe. Whether you're interested in{" "}
            <em>business, entertainment, sports, technology, health, science</em>, or just the
            latest general headlines — we've got you covered!
          </p>
          <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
            Built with <strong>React</strong> and powered by{" "}
            <a
              href="https://newsapi.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077cc", textDecoration: "none" }}
            >
              NewsAPI
            </a>
            , News-Monkey brings you a smooth and responsive user experience. Our intuitive
            interface allows you to flip through news categories and browse paginated content with
            ease.
          </p>
          <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
            Stay informed, stay ahead — with{" "}
            <strong style={{ color: "#ff4b2b" }}>News-Monkey 🔖.</strong> 
          </p>
        </div>
      </div>
    );
  }


export default Home;
