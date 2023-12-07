import singleUserImg from "../assets/single.png";
import doubleUserImg from "../assets/double.png"
import tripleUserImg from "../assets/triple.png"

const Pricing: React.FC = () => {
  return (
    <div className="[100vh] pt-40 pb-20 bg-white px-6 max-md:w-[100vw]">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center h-full sm:gap-y-20 2xl:max-w-[3200px] 2xl:px-40 2xl:mx-auto sm:w-[100%] 2xl:gap-28 max-sm:gap-y-32 max-sm:w-full">
        <div className="card">
          <div className="card-img">
            <img src={singleUserImg} alt="user icon" className="w-[100px]" />
          </div>
          <h3 className="user-name ">Single User</h3>
          <h1 className="price">$149</h1>
          <ul className="font-semibold px-6">
            <li className="list-style">500 GB Storage</li>
            <li className="list-style">1 User Allowed</li>
            <li className="list-style">Send up to 2GB</li>
          </ul>
          <button className="btn-card">
            Start Trial
          </button>
        </div>
        <div className="card" id="third-card">
          <div className="card-img">
            <img src={doubleUserImg} alt="user icon" className="w-[100px]" />
          </div>
          <h3 className="user-name">Partnership</h3>
          <h1 className="price">$199</h1>
          <ul className="font-semibold px-6">
            <li className="list-style">1 TB Storage</li>
            <li className="list-style"> 3 Users Allowed</li>
            <li className="list-style">Send up to 10GB</li>
          </ul>
          <button className="text-[#00df9a] bg-black mt-4 py-2 max-sm:w-32 rounded-lg hover:border-black hover:text-[#00df9a] hover:bg-transparent duration-500 border sm:w-40 md:mt-8">
            Start Trial
          </button>
        </div>
        <div className="card divide-cards">
          <div className="card-img">
            <img src={tripleUserImg} alt="user icon" className="w-[100px]" />
          </div>
          <h3 className="user-name mt-2">Single User</h3>
          <h1 className="price">$149</h1>
          <ul className="font-semibold px-6">
            <li className="list-style">5 TB Storage</li>
            <li className="list-style">10 Users Allowed</li>
            <li className="list-style">Send up to 20GB</li>
          </ul>
          <button className="btn-card">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
