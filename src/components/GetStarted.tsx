import PcImg from '../assets/laptop.jpg'

const GetStarted: React.FC = () => {
    return (
      <section className="bg-white text-black lg:h-[102vh] flex xl:h-[100vh]">
        <div className="grid md:grid-cols-2 gap-14 py-10 mx-auto max-w-7xl 2xl:max-w-[2400px] px-4">
          <div className="w-full h-full flex justify-center flex-col">
            <img src={PcImg} alt="pc image" className="w-full " />
          </div>

          <div className="flex flex-col justify-center ">
            <p className="text-[#00df9a] uppercase font-bold text-lg max-sm:text-center md:text-xl lg:text-2xl xl:text-3x 2xl:text-4xl">
              Data analytics dashboard
            </p>
            <h3 className="font-extrabold capitalize text-3xl sm:text-5xl xl:text-5xl xl:mt-4 max-sm:text-center md:text-3xl lg:mt-2 2xl:text-7xl">
              manage data analytics centrally
            </h3>
            <p className="font-semibold mt-3 xl:mt-5 mx-3 lg:text-xl xl:text-2xl 2xl:text-4xl 2xl:leading-[50px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              repellendus veritatis omnis est dignissimos fuga, odit excepturi
              perferendis accusantium nostrum non tempore maxime laudantium?
              Tenetur consequuntur quam reiciendis totam omnis debitis
              cupiditate, ipsum beatae blanditiis labore perferendis
              exercitationem doloremque voluptate quo eum modi doloribus facilis
              voluptatem necessitatibus et officia ullam aliquid natus laborum.
              Necessitatibus, ea?
            </p>
            <button className="bg-black text-[#00df9a] capitalize mt-3 xl:mt-10 text-center sm:py-3 sm:w-40 py-2 w-28 hover:text-black hover:bg-[#00df9a] duration-500 cursor-pointer font-bold rounded-xl max-sm:mx-auto xl:w-48 xl:py-4 xl:text-xl 2xl:mt-8 2xl:w-80 2xl:text-3xl 2xl:py-10 ml-4">
              Get Started
            </button>
          </div>
        </div>
      </section>
    );
}

export default GetStarted
