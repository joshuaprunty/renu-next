import "@/styles/Home.css";

export default function MobileFooter() {
  return (
    <div className="footer-div bg-body-tertiary lg:hidden">
      <div className="container-lg">
        <div className="row justify-content-start justify-content-md-center">
          <div className="d-flex justify-content-start flex-row">
            <div className="col-md-3 me-5 justify-content-center">
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
                      About
                    </a>
                  </li>
                  <li className="footer-list-item fw-light">
                    <a className="footer-link" href="#ternary-div">
                      Assessment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-md-3 justify-content-center">
            <div className="ms-auto">
              <ul className="footer-list">
                <li className="footer-list-item fw-light">© Joshua Prunty, 2023</li>
                <div className="d-flex flex-row justify-content-start">
                  <li className="footer-list-item fw-light me-3">
                    <a className="footer-link" href="">
                      Contact
                    </a>
                  </li>
                  <li className="footer-list-item fw-light">
                    <a className="footer-link" href="">
                      Privacy
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
