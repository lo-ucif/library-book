import "./navbar-module.css";
import logo from "../img/Boo__k library.svg";

export default function Navbar() {
  return (
    <div style={{ marginTop: "10px" }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            id="button01"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              // viewBox="0 0 16 12"
              fill="none"
            >
              <path
                d="M0 0H16V2H0V0ZM0 5H16V7H0V5ZM0 10H16V12H0V10Z"
                fill="#050906"
              />
            </svg>
          </button>
          <img className="logo" src={logo} alt="" />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav mx-auto"
              style={{ gap: "32px", justifyContent: "center" }}
            >
              <li className="nav-item">
                <a className="text001" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="text002" href="#offer">
                  Offer
                </a>
              </li>
              <li className="nav-item">
                <a className="text002" href="#event">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="text002" href="#statistics">
                  Statistics
                </a>
              </li>
              <li className="nav-item">
                <a className="text002" href="#question">
                  Question
                </a>
              </li>
              <li className="nav-item">
                <a className="text002" href="#member">
                  voices
                </a>
              </li>
            </ul>
          </div>

          <form class="d-flex" role="search">
            <button class="button02" type="submit">
              Login
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
