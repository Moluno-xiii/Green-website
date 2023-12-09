import { Typewriter } from "react-simple-typewriter";


const Hero: React.FC = () => {

    return (
      <div className="min-h-[80dvh]  md:min-h[80dvh]  flex mx-2 sm:mx-4 mb-2" id="/">
        <div className="flex flex-col justify-center items-center text-center flex-1 text-white">
          <h3 className="text-[#00df9a] uppercase sm:text-2xl lg:text-3xl font-bold sm:mb-0 mb-2 3xl:text-6xl">
            Growing with data analytics
          </h3>
          <h1 className="mb-2 text-3xl sm:text-5xl font-bold 3xl:text-[150px] 2xl:mb-[10px] ">
            Grow with data.
          </h1>
          <p className="mb-2 text-lg sm:text-3xl lg:text-5xl font-semibold 3xl:text-7xl">
            Fast, flexible financing for{" "}
            <span className="text-slate-500">{<Typewriter words={['BTB','D2C','SaaS', "API's" ]} loop = {10} deleteSpeed={100} typeSpeed={200}/>}</span>{" "}
          </p>
          <p className="text-slate-500 font-bold md:text-xl max-w-[700px] 2xl:text-5xl 2xl:max-w-[1200px] 3xl:max-w-[1700px] 3xl:leading-[50px] text-lg">
            Monitor your data analytics to increase revenue for BTB, BTC, & SaaS
            platforms.
          </p>
          <button className="text-black bg-[#00df9a] p-2 w-32 3xl:w-[330px] font-semibold mt-4 2xl:mt-10 rounded-md 3xl:text-5xl 2xl:mb-20 xl:py-3 2xl:rounded-2xl 2xl:text-3xl xl:w-[220px] lg:text-2xl lg:w-[180px] lg:py-3 3xl:py-6 hover:text-[#00df9a] duration-500 hover:bg-white">
            <a href="#get-started">Get Started</a>
          </button>
        </div>
      </div>
    );
}

export default Hero
