import "@/styles/Home.css";

export default function Footer() {
  return (
    <div className="p-[20px] text-base bg-body-tertiary sm:hidden">
      <div className="container-lg">
        <div className="row justify-content-start justify-content-md-center">
          <div className="col-md-3 justify-content-center">
            <div className="ms-auto">
              <ul className="list-none">
                <li className="font-extrabold">Renu</li>
                <li className="fw-light">v0.0.1</li>
                <li className="fw-light">
                  Created by <br />
                  Joshua Prunty
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 justify-content-center">
            <div className="ms-auto">
              <ul className="list-none">
                <li className="font-extrabold">Links</li>
                <li className="fw-light">
                  <a className="text-inherit no-underline" href="/">
                    Home
                  </a>
                </li>
                <li className="fw-light">
                  <a className="text-inherit no-underline" href="#secondary-div">
                    How it Works
                  </a>
                </li>
                <li className="fw-light">
                  <a className="text-inherit no-underline" href="#ternary-div">
                    Students
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 justify-content-center">
            <div className="ms-auto">
              <ul className="list-none">
                <li className="font-extrabold">Pages</li>
                <li className="fw-light">
                  <a className="text-inherit no-underline" href="/">
                    Home
                  </a>
                </li>
                <li className="fw-light">
                  <a className="text-inherit no-underline" href="./form-start.html">
                    Take the Assessment
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 justify-content-center">
            <div className="ms-auto">
              <ul className="list-none">
                <li className="fw-light">© Joshua Prunty, 2023</li>
                <li className="fw-light">
                  <button
                    type="button"
                    className="btn nav-link text-inherit no-underline"
                    data-bs-toggle="modal"
                    data-bs-target="#about-modal"
                  >
                    About Renu
                  </button>
                </li>
                <li className="fw-light">
                  <a className="text-inherit no-underline" href="">
                    Contact
                  </a>
                </li>
                <li className="fw-light">
                  <a className="text-inherit no-underline" href="">
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
