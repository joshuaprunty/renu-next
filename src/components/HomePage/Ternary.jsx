
export default function Ternary() {
  return (
    <div className="bg-white" id="bg-white">
      <div className="container mx-auto py-20 px-6">
        <p className="text-5xl text-center">Built for every student</p>
        <hr className="w-2/3 mx-auto mt-0 mb-5 text-black" />
        <div className="flex flex-wrap mt-4 px-4 text-center">
          <div className="w-full lg:w-3/4 md:gap-3">
            <div className="flex w-full h-60 border border-[#dedede] rounded-[18px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.2)] m-6 p-2">
              <img 
                className="h-full w-1/4 object-cover rounded-[15px] flex-shrink-0" 
                src="/WCWelcome.png" 
              />
              <div className="flex flex-col justify-center items-center flex-grow px-5">
                <p className="text-3xl font-light">Incoming First-Years</p>
                <p className="text-xl font-light">
                  Get a head-start on class selections for your first quarter at
                  Northwestern.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/4"></div>
          <div className="w-full lg:w-1/4"></div>

          <div className="w-full lg:w-3/4 md:gap-3">
            <div className="flex w-full h-60 border border-[#dedede] rounded-[18px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.2)] m-6 p-2">
              <div className="flex flex-col justify-center items-center flex-grow px-5">
                <p className="text-3xl font-light">Current Undergrads</p>
                <p className="text-xl font-light">
                  Find the best courses for you based on your favorite (and
                  least favorite) past classes.
                </p>
              </div>
              <img 
                className="h-full w-1/4 object-cover rounded-[15px] flex-shrink-0" 
                src="/Undergrads.png" 
              />
            </div>
          </div>

          <div className="w-full lg:w-3/4 md:gap-3">
            <div className="flex w-full h-60 border border-[#dedede] rounded-[18px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.2)] m-6 p-2">
              <img 
                className="h-full w-1/4 object-cover rounded-[15px] flex-shrink-0" 
                src="/Kellogg.png" 
              />
              <div className="flex flex-col justify-center items-center flex-grow px-5">
                <p className="text-3xl font-light">Graduate Students</p>
                <p className="text-xl font-light">
                  Continue on your journey with specialized recommendations.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/4"></div>
        </div>
      </div>
    </div>
  );
}