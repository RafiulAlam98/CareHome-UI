import { Link } from "react-router-dom";
import BookATour from "../BookATour/BookATour";
import SendEmail from "../SendEmail/SendEmail";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function HeroDetailsLink({ id }: any) {
  return (
    <div className="flex justify-around items-center my-2 bg-gray-100 py-6 rounded">
      <BookATour />
      <button className="bg-[#2073BD] text-sm text-white text-semibold font-normal px-2 py-1">
        <Link to="https://www.carehome.co.uk/">Visit Website</Link>
      </button>
      <SendEmail />
      <button
        onClick={() => (window as any).my_modal_3.showModal()}
        className="bg-[#2073BD] text-sm text-white text-semibold font-normal px-2 py-1"
      >
        Call
      </button>
      <button className="bg-[#2073BD] text-sm text-white text-semibold font-normal px-2 py-1">
        <Link to={`/dashboard/news-event/${id}`}>Add NewsEvent</Link>
      </button>
      <button className="bg-[#008636] text-sm text-white text-semibold font-normal px-2 py-1">
        <Link to={`/dashboard/award/${id}`}>Add an Award</Link>
      </button>
    </div>
  );
}