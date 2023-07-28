import { Link } from "react-router-dom";
import "./CallHelpLine.css";

export default function CallHelpLine() {
  return (
    <>
      {/* You can open the modal using ID.showModal() method */}
      <button
        className="bg-[#16C263] px-2 rounded-md"
        onClick={() => window.my_modal_3.showModal()}
      >
        <span>
          <i className="fa-solid fa-phone-flip mr-2 text-white"></i>
        </span>
        <span className="text-sm text-white">Call Our Free Care HelpLine</span>
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn-circle btn-sm hover:bg-red-700 hover:text-white bg-black text-white  mb-4 absolute right-2 top-2">
            ✕
          </button>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div>
                <img
                  src="https://www.carehome.co.uk/assets/images/carehelp/helpline-experts-v2.jpg"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="shadow-xl px-3 mt-3 p-2 border border-green-300">
                <h2 className="font-bold text-md">I am so grateful</h2>
                <p className="font-semibold text-xs ">
                  "... for the help of carehome.co.uk guiding me towards finding
                  a suitable care home for my Mum. Eileen provided a list of
                  potential care homes. The care homes have been contacted in
                  advance on my behalf. I can now use this to arrange visits as
                  soon as possible."
                </p>
                <h3 className="text-xs mt-2 font-normal">
                  L Gardiner December 2022
                </h3>
              </div>
            </div>

            <div className="col-span-2">
              <h1 className="text-xl mt-7 font-bold mb-2 px-1">
                Call our free service to help you find the right care home
              </h1>
              <h3 className="text-sm text-gray-400 mb-2">
                (our service currently only includes care homes for older
                people)
              </h3>
              <Link to="" className="text-xl text-[#23527C]">
                <span className="hover:border-b-2  hover:border-[#23527C]">
                  0800 808 5820
                </span>
              </Link>
              <h4 className="text-xs mb-2 text-gray-400 flex justify-between items-center">
                <span>Monday - Friday</span>
                <li>Calls are free to this number</li>
              </h4>
              <div>
                <h2 className="text-xs mb-2">
                  <span>
                    <i className="fa-solid fa-check text-xs mr-2"></i>
                  </span>
                  Speak to our friendly team for information on choosing a care
                  home. We can help guide you to find a care home in the right
                  location with the type of care you require, whatever your
                  budget.
                </h2>
                <h2 className="text-xs mb-2">
                  <span>
                    <i className="fa-solid fa-check text-xs mr-2"></i>
                  </span>
                  With so many different care homes available, looking for the
                  right one can seem overwhelming. We can help you narrow down
                  your search and support you in making this important decision.
                </h2>
                <h2 className="text-xs mb-2">
                  <span>
                    <i className="fa-solid fa-check text-xs mr-2"></i>
                  </span>
                  Our knowledgeable team will do their utmost to guide you or
                  your family or friends to choose the best care option.
                </h2>
              </div>
              <hr className="my-2 mx-7 text-gray-400" />
              <p className="text-xs text-gray-600 ">
                Alternatively, email{" "}
                <Link to="" className="text-blue-600">
                  carehelp@carehome.co.uk
                </Link>{" "}
                with a brief outline of your care needs and a member of the team
                will contact you.
              </p>
              <Link
                to=""
                className="text-xs text-blue-600 hover:border-b hover:border-blue-600"
              >
                View more information about our free service.
              </Link>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}
