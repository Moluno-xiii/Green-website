const ContactUs: React.FC = () => {
  return (
    <section className="h-[40vh] flex items-center mx-auto">
      <div className="grid md:grid-cols-2 text-white mx-auto max-w-7xl gap-4">
        <div className="">
          <h1 className="font-bold lg:text-4xl">
            Want tips & tricks to optimize your flow?{" "}
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your email"
            className="text-slate-900 bg-white mr-6 rounded-lg py-4 px-2 md:w-96 focus:outline-none"
          />
          <button className="py-3 rounded-lg hover:bg-white hover:text-[#00df9a] duration-500 cursor-pointer text-black bg-[#00df9a] w-28">
            Notify me
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
