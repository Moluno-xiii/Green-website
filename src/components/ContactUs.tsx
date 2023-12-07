const ContactUs: React.FC = () => {
  return (
    <section className="h-[40dvh] md:h-[250px] 2xl:h-[23dvh] flex items-center">
      <div className="mx-2 lg:mx-auto grid md:grid-cols-2 text-white  max-w-7xl 2xl:max-w-[2500px] gap-4 w-full">
        <div className="">
          <h1 className="font-bold lg:text-4xl 2xl:text-6xl text-xl md:text-2xl max-xl:text-center">
            Want tips & tricks to optimize your flow?{" "}
          </h1>
          <p className="text-sm max-xl:text-center md:text-base lg:text-xl 2xl:text-4xl">
            Sign up to our newsletter and stay up to date
          </p>
        </div>
        <div>
          <div className="flex max-md:flex-col justify-between">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-slate-900 bg-white py-2 text-lg rounded-lg px-2 focus:outline-[#00df9a] self-center flex-1 md:mr-3 2xl:py-6 2xl:text-4xl"
            />
            <button className="sm:py-3 max-md:mt-3 rounded-lg hover:bg-white hover:text-[#00df9a] duration-500 cursor-pointer text-black bg-[#00df9a] w-28 max-md:mx-auto self-center 2xl:py-6 2xl:text-4xl 2xl:w-60">
              Notify me
            </button>
          </div>
          <p className="max-sm:text-center xl:text-xl 2xl:text-3xl">
            We care about the protection of your data. read our{" "}
            <span className="hover:underline text-[#00df9a] cursor-pointer md:block">
              learn more
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
