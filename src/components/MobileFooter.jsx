
export default function MobileFooter() {
  return (
    <div className="p-[20px] text-base bg-gray-100 lg:hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-start">
            <div className="mr-5">
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
            <div>
              <div className="ml-auto">
                <ul className="list-none">
                  <li className="font-extrabold">Links</li>
                  <li className="font-light">
                    <a className="footer-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="font-light">
                    <a className="footer-link" href="#secondary-div">
                      About
                    </a>
                  </li>
                  <li className="font-light">
                    <a className="footer-link" href="#ternary-div">
                      Assessment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="ml-auto">
              <ul className="list-none">
                <li className="font-light">© Joshua Prunty, 2023</li>
                <div className="flex flex-row justify-start">
                  <li className="font-light mr-3">
                    <a className="footer-link" href="">
                      Contact
                    </a>
                  </li>
                  <li className="font-light">
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
