import { Link } from "react-router-dom";
import "./Header.css";
import CallHelpLine from "../../../components/CallHelpLine/CallHelpLine";

export default function Header() {
  return (
    <>
      <div className="header-container max-w-[1200px] mx-auto">
        <div className="">
          <Link to="/">
            <img
              src="https://www.carehome.co.uk/assets/images/theme/logo.svg"
              alt=""
              className="w-1/2"
            />
          </Link>
        </div>

        <div className="mr-20">
          <Link to="" className="text-sm mr-4 text-[#2073BD]">
            Care Search
          </Link>
          <Link to="" className="text-sm mr-4 text-[#2073BD]">
            Care Advice
          </Link>
          <Link to="" className="text-sm mr-4 text-[#2073BD]">
            Job Search
          </Link>
          <Link to="" className="text-sm mr-6 text-[#2073BD]">
            Industry Resources
          </Link>
        </div>

        <div className="user-container">
          <div>
            <i className="fa-solid fa-heart text-xl text-[#FF3547] mr-2"></i>
          </div>
          <div>
            <i className="fa-regular fa-eye text-xl text-[#2073BD] mr-2"></i>
          </div>
          <div className="dropdown">
            <label tabIndex={0}>
              <i className="fa-solid fa-circle-user text-xl text-[#2073BD] "></i>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[rgb(29,53,101)]">
        <div className="navbar max-w-[1200px]  mx-auto">
          <div className="">
            <div className="dropdown">
              <label tabIndex={1} className=" lg:hidden text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={1}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow bg-base-100 border border-[#1D3565]  rounded-none w-60"
              >
                <li>
                  <Link
                    to=""
                    className="font-normal hover:bg-[#01284A] hover:text-white"
                  >
                    Care Homes
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="font-normal hover:bg-[#01284A] hover:text-white "
                  >
                    Other Care Settings
                  </Link>
                  <ul className="p-1">
                    <li>
                      <Link
                        to=""
                        className="font-normal hover:bg-[#01284A] hover:text-white"
                      >
                        Extra Care Housing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="font-normal hover:bg-[#01284A] hover:text-white"
                      >
                        Adult Day Care Centres
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="font-normal hover:bg-[#01284A] hover:text-white"
                      >
                        Mental Health Hospital
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to=""
                    className="font-normal hover:bg-[#01284A] hover:text-white"
                  >
                    Groups/Owners
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="font-normal hover:bg-[#01284A] hover:text-white"
                  >
                    Care HelpLine
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="font-normal hover:bg-[#01284A] hover:text-white"
                  >
                    Awards
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="font-normal hover:bg-[#01284A] hover:text-white"
                  >
                    Submit a Review
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="" className="text-white hover:text-white  text-xs">
                  Care Homes
                </Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary className="text-white hover:text-white text-xs">
                    Other Care Settings
                  </summary>
                  <ul className="p-1 border border-[#1D3565]  rounded-none">
                    <li>
                      <Link
                        to=""
                        className="text-xs text-[#1D3565] font-normal hover:bg-[#01284A] hover:text-white"
                      >
                        Extra Care Housing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="text-xs text-[#1D3565] font-normal hover:bg-[#01284A] hover:text-white"
                      >
                        Adult Day Care Centres
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="text-xs text-[#1D3565] font-normal hover:bg-[#01284A] hover:text-white"
                      >
                        Mental Health Hospital
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="" className="text-white hover:text-white text-xs">
                  Groups/Owners
                </Link>
              </li>
              <li>
                <Link to="" className="text-white hover:text-white text-xs">
                  Care HelpLine
                </Link>
              </li>
              <li>
                <Link to="" className="text-white hover:text-white text-xs">
                  Awards
                </Link>
              </li>
              <li>
                <Link to="" className="text-white hover:text-white text-xs">
                  Submit a Review
                </Link>
              </li>
            </ul>
            <CallHelpLine />
          </div>
        </div>
      </div>
    </>
  );
}
