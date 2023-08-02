import { Link, Outlet } from "react-router-dom";

export default function DashboardMain() {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">Review</Link>
          </li>
          <li>
            <Link to="/dashboard/user">All User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
