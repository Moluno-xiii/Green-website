import singleUserImg from "../assets/single.png";

const Pricing: React.FC = () => {
  return (
    <div className=" h-[100vh]">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 mx-auto items-center bg-white h-full">
        <div className="relative bg-blue-500 h-[60dvh] text-center  fex flex-col ites-cente">
          <div className="absolute flex w-full justify-center top-[-10rem]">
            <img src={singleUserImg} alt="user icon" className="w-[250px]" />
          </div>
          <h3 className="font-bold ">Single User</h3>
          <h1 className="font-bold">$149</h1>
          <ul className="font-semibold px-6">
            <li className="border-b border-slate-600">500 GB Storage</li>
            <li className="border-b border-slate-600">1 User Allowed</li>
            <li className="border-b border-slate-600">Send up to 2GB</li>
          </ul>
          <button className="text-black bg-[#00df9a]">Start Trial</button>
        </div>
        <div className="relative">
          <div className="absolute flex justify-center top-[-20px]">
            <img src={singleUserImg} alt="user icon" className="w-[250px]" />
          </div>
          <h3 className="font-bold">Partnership</h3>
          <h1 className="font-bold">$199</h1>
          <ul className="font-semibold px-6">
            <li className="border-b border-slate-600">1 TB Storage</li>
            <li className="border-b border-slate-600"> 3 Users Allowed</li>
            <li className="border-b border-slate-600">Send up to 10GB</li>
          </ul>
          <button className="text-[#00df9a] bg-black">Start Trial</button>
        </div>
        <div className="relative bg-slate-400">
          <div className="absolute flex justify-center top-[-20px]">
            <img src={singleUserImg} alt="user icon" className="w-[250px]" />
          </div>
          <h3 className="font-bold">Single User</h3>
          <h1 className="font-bold">$149</h1>
          <ul className="font-semibold px-6">
            <li className="border-b border-slate-600">5 TB Storage</li>
            <li className="border-b border-slate-600">10 Users Allowed</li>
            <li className="border-b border-slate-600">Send up to 20GB</li>
          </ul>
          <button className="text-black bg-[#00df9a]">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
