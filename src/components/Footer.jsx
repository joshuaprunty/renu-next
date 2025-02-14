
export default function Footer() {
  return (
    <div className="p-[20px] text-base bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex justify-center">
            <div className="ml-auto">
              <ul className="list-none">
                <li className="font-extrabold">Renu</li>
                <li className="font-light">v0.0.1</li>
                <li className="font-light">
                  Created by <br />
                  Joshua Prunty
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="ml-auto">
              <ul className="list-none">
                <li className="font-extrabold">Links</li>
                <li className="font-light">
                  <a className="text-inherit no-underline" href="/">
                    Home
                  </a>
                </li>
                <li className="font-light">
                  <a className="text-inherit no-underline" href="#secondary-div">
                    How it Works
                  </a>
                </li>
                <li className="font-light">
                  <a className="text-inherit no-underline" href="#ternary-div">
                    Students
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="ml-auto">
              <ul className="list-none">
                <li className="font-extrabold">Pages</li>
                <li className="font-light">
                  <a className="text-inherit no-underline" href="/">
                    Home
                  </a>
                </li>
                <li className="font-light">
                  <a className="text-inherit no-underline" href="./form-start.html">
                    Take the Assessment
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="ml-auto">
              <ul className="list-none">
                <li className="font-light">© Joshua Prunty, 2023</li>
                <li className="font-light">
                  <button
                    type="button"
                    className="btn text-inherit no-underline"
                    data-bs-toggle="modal"
                    data-bs-target="#about-modal"
                  >
                    About Renu
                  </button>
                </li>
                <li className="font-light">
                  <a className="text-inherit no-underline" href="">
                    Contact
                  </a>
                </li>
                <li className="font-light">
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
