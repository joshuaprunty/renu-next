export default function Footer() {
  return (
    <div className="p-[20px] text-base bg-background">
      <div className="mx-auto px-4 max-w-[100rem]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex justify-center">
            <div className="">
              <ul className="list-none">
                <li className="font-semibold text-foreground">Renu</li>
                <li className="font-light text-muted-foreground">v0.0.1</li>
                <li className="font-light text-muted-foreground">
                  Created by <br />
                  Joshua Prunty
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="">
              <ul className="list-none">
                <li className="font-semibold text-foreground">Links</li>
                <li className="font-light">
                  <a className="text-muted-foreground no-underline hover:text-foreground" href="/">
                    Home
                  </a>
                </li>
                <li className="font-light">
                  <a className="text-muted-foreground no-underline hover:text-foreground" href="#secondary-div">
                    How it Works
                  </a>
                </li>
                <li className="font-light">
                  <a className="text-muted-foreground no-underline hover:text-foreground" href="#bg-white">
                    Students
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="">
              <ul className="list-none">
                <li className="font-semibold text-foreground">Pages</li>
                <li className="font-light">
                  <a className="text-muted-foreground no-underline hover:text-foreground" href="/">
                    Home
                  </a>
                </li>
                <li className="font-light">
                  <a className="text-muted-foreground no-underline hover:text-foreground" href="./form-start.html">
                    Take the Assessment
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="">
              <ul className="list-none">
                <li className="font-light text-muted-foreground">© Joshua Prunty, 2023</li>
                <li className="font-light">
                  <button
                    type="button"
                    className="text-muted-foreground no-underline hover:text-foreground"
                    data-bs-toggle="modal"
                    data-bs-target="#about-modal"
                  >
                    About Renu
                  </button>
                </li>
                <li className="font-light">
                  <a className="text-muted-foreground no-underline hover:text-foreground" href="">
                    Contact
                  </a>
                </li>
                <li className="font-light">
                  <a className="text-muted-foreground no-underline hover:text-foreground" href="">
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
