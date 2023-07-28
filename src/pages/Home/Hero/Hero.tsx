/* eslint-disable @typescript-eslint/no-explicit-any */
import Searching from "../../../components/Searching/Searching";
import "./Hero.css";
export default function Hero() {
  return (
    <div className="max-w-[1200px]  mx-auto">
      <h1 className="text-[#55557B] text-center text-2xl mt-5">
        Reviews for Care Homes, Residential Homes & Nursing Homes
      </h1>
      <h2 className="text-gray-600 text-center text-md mt-2">
        The leading UK Care Home review website with 16,808 Care Homes, 16
        million+ visits per year & 282,461 Care Home reviews
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="mt-4 lg:col-span-2">
          <Searching></Searching>
        </div>

        <div className=" mt-4">
          <button
            className="bg-[#16C263] px-2 rounded-md hero-help-container p-6"
            onClick={() => (window as any).my_modal_3.showModal()}
          >
            <h4 className="text-white text-start text-sm my-2">
              Need help finding care?
            </h4>
            <h2 className="text-white text-start text-sm mb-2 font-semibold">
              <i className="fa-solid fa-phone-flip mr-2 text-white"></i>
              Call Our Free Care HelpLine
            </h2>
            <h4 className="text-white text-sm mb-2 text-start font-semibold">
              for help finding the right care home
            </h4>
            <div className="flex justify-between text-sm mb-2 text-white text-start font-semibold">
              <h2 className=" ">I am so grateful</h2>
              <h3 className="">L Gardiner December 2022</h3>
            </div>
            <p className="text-sm mt-2 text-white text-start font-semibold">
              "... for the help of carehome.co.uk guiding me towards finding a
              suitable care home for my Mum."
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
