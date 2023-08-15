import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function BookATour() {
  return (
    <>
      <button className="bg-[#FF3547] text-sm text-white text-semibold font-normal px-2 py-1">
        <Link to="/tour">Book a Tour</Link>
      </button>
    </>
  );
}
