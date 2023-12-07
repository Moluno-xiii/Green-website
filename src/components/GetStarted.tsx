import PcImg from '../assets/laptop.jpg'

const GetStarted: React.FC = () => {
    return (
      <section className="bg-white text-black">
        <div className="grid md:grid-cols-2 gap-14 py-10 mx-auto max-w-7xl px-4">
          <div className="w-full h-full flex justify-center flex-col">
            <img src={PcImg} alt="pc image" className="w-full " />
          </div>

          <div className="flex flex-col justify-center ">
            <p className="text-green-500 uppercase font-bold sm:text-2xl max-sm:text-center">
              Data analytics dashboard
            </p>
            <h3 className="font-bold capitalize text-3xl sm:text-5xl xl:text-7xl xl:mt-10 max-sm:text-center">
              manage data analytics centrally
            </h3>
            <p className="font-semibold mt-3 xl:mt-10 mx-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              repellendus veritatis omnis est dignissimos fuga, odit excepturi
              perferendis accusantium nostrum non tempore maxime laudantium?
              Tenetur consequuntur quam reiciendis totam omnis debitis
              cupiditate, ipsum beatae blanditiis labore perferendis
              exercitationem doloremque voluptate quo eum modi doloribus facilis
              voluptatem necessitatibus et officia ullam aliquid natus laborum.
              Necessitatibus, ea?
            </p>
            <button className="bg-black text-green-500 capitalize mt-3 xl:mt-10 text-center sm:py-3 sm:w-40 py-2 w-28 hover:text-black hover:bg-green-500 duration-500 cursor-pointer font-bold rounded-xl mx-auto">
              Get Started
            </button>
          </div>
        </div>
      </section>
    );
}

export default GetStarted
