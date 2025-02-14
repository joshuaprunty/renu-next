import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center bg-cover bg-center relative pt-32 pb-16 max-h-[850px] bg-[url('/Deering.jpg')]">
        <div className="container mx-auto px-4">
          <div className="flex items-center flex-wrap max-w-[100rem] mx-auto">
            <div className="w-full md:w-1/2 text-white text-center mx-auto">
              <h1 className="text-5xl font-light mb-4">
                Find your next class without the guesswork.
              </h1>
              <p className="font-light text-2xl mb-4">
                Get tailored recommendations for major requirements, distros,
                and more.
              </p>
              <Link href="/form" className="inline-block">
                <Button className="text-lg font-light py-5 px-8">Get Started</Button>
              </Link>
            </div>
            <div className="w-full md:w-5/12 font-light text-center">
              <img
                src="/HeroCard.png"
                className="w-10/12 lg:w-3/4 mt-[45px] lg:mt-0 h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
