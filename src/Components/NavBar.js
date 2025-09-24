


const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            News-Monkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link category-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link category-link " href="/About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link category-link " href="/Contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link category-link " href="/general">
                  General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link category-link " href="/business">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link category-link " href="/entertainment">
                  Entertainment
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link category-link " href="/health">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link category-link " href="/science">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link category-link " href="/sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link category-link " href="/technology">
                  Technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
