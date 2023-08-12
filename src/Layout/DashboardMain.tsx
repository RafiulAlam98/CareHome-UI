import { Link, Outlet } from "react-router-dom";

export default function DashboardMain() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <h3 className="text-lg bg-red-100 p-2 rounded my-1 hover:bg-slate-400">
            <Link to="/dashboard/addCareHome">Add New Care Home</Link>
          </h3>
          <h3 className="text-lg bg-red-100 p-2 rounded my-1 hover:bg-slate-400">
            <Link to="/dashboard/award">Add an Award</Link>
          </h3>
          <h3 className="text-lg bg-red-100 p-2 rounded my-1 hover:bg-slate-400">
            <Link to="/dashboard/news-event">Add News Event</Link>
          </h3>
        </ul>
      </div>
    </div>
  );
}
