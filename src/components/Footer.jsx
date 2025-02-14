import "@/styles/Home.css";
import "@/styles/util.css";

export default function Footer() {
  return (
    <div className="footer-div bg-body-tertiary hide-sm">
      <div className="container-lg">
        <div className="row justify-content-start justify-content-md-center">
          <div className="col-md-3 justify-content-center">
            <div className="ms-auto">
              <ul className="footer-list">
                <li className="footer-list-item fl-top">Renu</li>
                <li className="footer-list-item fw-light">v0.0.1</li>
                <li className="footer-list-item fw-light">
                  Created by <br />
                  Joshua Prunty
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 justify-content-center">
            <div className="ms-auto">
              <ul className="footer-list">
                <li className="footer-list-item fl-top">Links</li>
                <li className="footer-list-item fw-light">
                  <a className="footer-link" href="/">
                    Home
                  </a>
                </li>
                <li className="footer-list-item fw-light">
                  <a className="footer-link" href="#secondary-div">
                    How it Works
                  </a>
                </li>
                <li className="footer-list-item fw-light">
                  <a className="footer-link" href="#ternary-div">
                    Students
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 justify-content-center">
            <div className="ms-auto">
              <ul className="footer-list">
                <li className="footer-list-item fl-top">Pages</li>
                <li className="footer-list-item fw-light">
                  <a className="footer-link" href="/">
                    Home
                  </a>
                </li>
                {/* <li className="footer-list-item fw-light">
                  <a className="footer-link" href="">
                    Login
                  </a>
                </li> */}
                <li className="footer-list-item fw-light">
                  <a className="footer-link" href="./form-start.html">
                    Take the Assessment
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 justify-content-center">
            <div className="ms-auto">
              <ul className="footer-list">
                <li className="footer-list-item fw-light">© Joshua Prunty, 2023</li>
                <li className="footer-list-item fw-light">
                  <button
                    type="button"
                    className="btn nav-link footer-link"
                    data-bs-toggle="modal"
                    data-bs-target="#about-modal"
                  >
                    About Renu
                  </button>
                </li>
                <li className="footer-list-item fw-light">
                  <a className="footer-link" href="">
                    Contact
                  </a>
                </li>
                <li className="footer-list-item fw-light">
                  <a className="footer-link" href="">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
