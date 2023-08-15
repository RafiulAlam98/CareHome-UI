import { Link, Outlet } from "react-router-dom";

export default function DashboardMain() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          <button className=" bg-slate-500 font-semibold text-xl p-2 text-white  rounded my-1 hover:bg-teal-600">
            <Link to="/">Home</Link>
          </button>

          <button className=" bg-slate-500 font-semibold text-xl p-2 text-white  rounded my-1 hover:bg-teal-600">
            <Link to="/dashboard">Add New Care Home</Link>
          </button>
          {/* <h3 className="text-sm bg-slate-600 p-2 text-white  rounded my-1 hover:bg-slate-600">
            <Link to="/dashboard/award">Add an Award</Link>
          </h3> */}
          {/* <h3 className="text-sm bg-slate-600 p-2 text-white  rounded my-1 hover:bg-slate-600">
            <Link to="/dashboard/news-event">Add News Event</Link>
          </h3> */}
          <button className=" bg-slate-500 font-semibold text-xl p-2 text-white  rounded my-1 hover:bg-teal-600">
            <Link to="/dashboard/feature-list">All Care Home</Link>
          </button>
          <button className=" bg-slate-500 font-semibold text-xl p-2 text-white  rounded my-1 hover:bg-teal-600">
            <Link to="/dashboard/user-list">All Users</Link>
          </button>
          <button className=" bg-slate-500 font-semibold text-xl p-2 text-white  rounded my-1 hover:bg-teal-600">
            <Link to="/dashboard/tour-list">All Tours</Link>
          </button>
        </ul>
      </div>
    </div>
  );
}
