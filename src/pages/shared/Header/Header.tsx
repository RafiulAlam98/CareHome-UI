import { Link } from "react-router-dom";
import "./Header.css";
import CallHelpLine from "../../../components/CallHelpLine/CallHelpLine";
import logo from "../../../assets/logo.webp";

export default function Header() {
  // const user = localStorage.getItem("accessToken");
  const role = localStorage.getItem("user");
  console.log(role);
  const handleLogout = () => {
    const user = localStorage.removeItem("user");
    const token = localStorage.removeItem("accessToken");
    return {
      user,
      token,
    };
  };
  return (
    <>
      <div className="header-container max-w-[1200px] mx-auto">
        <div className="">
          <Link to="/">
            <img src={logo} alt="" className="w-10" />
          </Link>
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
                  {role === "admin" && (
                    <Link
                      to="/dashboard"
                      className="text-sm mr-4 text-[#2073BD]"
                    >
                      Dashboard
                    </Link>
                  )}
                </li>
                <li>
                  <Link to="/about" className="text-sm mr-4 text-[#2073BD]">
                    About
                  </Link>
                </li>

                {role === null ? (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="font-normal hover:bg-[#01284A] hover:text-white"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sign-up"
                        className="font-normal hover:bg-[#01284A] hover:text-white"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                ) : (
                  <button
                    className="font-normal  hover:bg-[#01284A] hover:text-white"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </button>
                )}

                {/* <li>
                  <Link
                    to="/reviews"
                    className="font-normal hover:bg-[#01284A] hover:text-white"
                  >
                    Submit a Review
                  </Link>
                </li> */}
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
              <li>
                {role === "admin" && (
                  <Link to="/dashboard" className="text-sm mr-4 text-[#2073BD]">
                    Dashboard
                  </Link>
                )}
              </li>
              <li>
                <Link to="/about" className="text-sm mr-4 text-[#2073BD]">
                  About
                </Link>
              </li>

              {role === null ? (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="text-white hover:text-white  text-xs"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sign-up"
                      className="text-white hover:text-white  text-xs"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <button
                  className="text-white hover:text-white  text-xs"
                  onClick={() => handleLogout()}
                >
                  logout
                </button>
              )}

              {/* <li>
                <Link to="" className="text-white hover:text-white text-xs">
                  Submit a Review
                </Link>
              </li> */}
            </ul>
            <CallHelpLine />
          </div>
        </div>
      </div>
    </>
  );
}
