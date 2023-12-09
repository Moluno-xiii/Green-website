const ContactUs: React.FC = () => {
  return (
    <section
      className="h-[40dvh] md:h-[250px] 2xl:h-[300px] flex items-center  2xl:mx-10"
      id="contact"
    >
      <div className="mx-2 lg:mx-auto grid md:grid-cols-2 text-white  max-w-7xl 2xl:max-w-[2500px] gap-4 w-full">
        <div className="">
          <h1 className="font-bold lg:text-4xl 3xl:text-6xl text-xl md:text-2xl max-xl:text-center">
            Want tips & tricks to optimize your flow?{" "}
          </h1>
          <p className="text-sm max-xl:text-center text-ceter md:text-base lg:text-xl 2xl:text-2xl 3xl:text-5xl 3xl:mt-3">
            Sign up to our newsletter and stay up to date
          </p>
        </div>
        <div>
          <div className="flex max-md:flex-col justify-between">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-slate-900 bg-white py-2 text-lg rounded-lg px-2 focus:outline-[#00df9a] self-center flex-1 md:mr-3 2xl:py-3 2xl:text-2xl 3xl:py-6 3xl:text-4xl 3xl:w-60 sm:w-[70vw] w-[90vw]"
            />
            <button className="sm:py-3 max-md:mt-3 rounded-lg hover:bg-white hover:text-[#00df9a] duration-500 cursor-pointer text-black bg-[#00df9a] w-28 max-md:mx-auto self-center 2xl:py-3 2xl:text-2xl 2xl:w-40 3xl:py-6 3xl:text-4xl 3xl:w-60 py-2">
              Notify me
            </button>
          </div>
          <p className="max-md:text-center xl:text-xl 2xl:text-2xl 3xl:text-3xl">
            We care about the protection of your data. read our{" "}
            <span className="underline text-[#00df9a] cursor-pointer 3xl:block">
              learn more
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
