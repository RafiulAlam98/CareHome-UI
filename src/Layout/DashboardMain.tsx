import { Link, Outlet } from "react-router-dom";

import logo from '../../logo/logo of careHome.png';

export default function DashboardMain() {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet />
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu w-80 h-full text-base-content bg-orange-500 ">
          <Link to="/">
            <img src={logo} alt="" />
            <hr className="mt-1" />
          </Link>

          <h1 className="text-2xl my-3 text-center text-white font-semibold">
            Dashboard
          </h1>

          <Link to="/dashboard">
            <button className=" border   text-xl font-semibold text-white  rounded my-1 hover:bg-[#214497] py-3 hover:text-white mt-7">
              Add New Care Home
            </button>
          </Link>
          {/* <h3 className="text-sm bg-slate-600 py-1 text-[#214497]  roundied my-1 hover:bg-slate-600">
            <Link to="/dashboard/award">Add an Award</Link>
          </h3> */}
          {/* <h3 className="text-sm bg-slate-600 py-1 text-[#214497]  rounded my-1 hover:bg-slate-600">
            <Link to="/dashboard/news-event">Add News Event</Link>
          </h3> */}
          <Link to="/dashboard/feature-list">
            <button className=" border   text-xl font-semibold  text-white  rounded my-1 hover:bg-[#214497] py-3 hover:text-white">
              Care Home List
            </button>
          </Link>
          <Link to="/dashboard/user-list">
            <button className=" border   text-xl font-semibold  text-white  rounded my-1 hover:bg-[#214497] py-3 hover:text-white">
              Users List
            </button>
          </Link>
          <Link to="/dashboard/tour-list">
            <button className=" border   text-xl font-semibold text-white  rounded my-1 hover:bg-[#214497] py-3 hover:text-white">
              Tours List
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
