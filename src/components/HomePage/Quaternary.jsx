
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Quaternary() {
  return (
    <div className="bg-[#443161] h-[65vh] min-h-[350px] flex justify-center overflow-hidden relative" id="quabg-white">
      <div className="mx-auto flex flex-col justify-center max-w-[100rem] container">
        <img 
          className="block h-[250%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" 
          src="/NorthwesternN.png" 
        />
        <div className="relative z-10 w-full">
          <div className="flex h-full items-center">
            <div className="w-1/6"></div>
            <div className="w-2/3 justify-center text-center mx-auto">
              <h2 className="text-white text-center font-light mb-4">
                Find your next class now
              </h2>
              <Link href="./form" className="">
                <Button>Get Started</Button>
              </Link>
            </div>
            <div className="w-1/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
