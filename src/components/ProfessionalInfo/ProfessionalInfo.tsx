import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ProfessionalInfo({
  owner,
  personIncharge,
  localAuthority,
  admissionRestrictionAge,
  room,
}: any) {
  return (
    <div>
      <h2 className="text-lg border-b-gray-200 border-b-2 font-semibold my-1">
        Good To Know
      </h2>
      <div className=" my-2 ">
        <h1 className="flex justify-start items-center">
          <i className="fa-solid fa-user-group text-[#2073BD] text-lg mr-2"></i>

          <h2 className="font-semibold text-md my-1 mx-1">Group/Owner</h2>
        </h1>
        <h3 className="text-sm ml-8 text-[#2073BD] ">
          <Link to="" className="hover:border-b-2 hover:border-b-blue-400">
            {owner}
          </Link>
        </h3>
      </div>
      <div className=" my-2 ">
        <h1 className="flex justify-start items-center">
          <i className="fa-solid fa-user text-[#2073BD] text-lg mr-2"></i>
          <h2 className="font-semibold text-md my-1 mx-1">Person in charge</h2>
        </h1>
        <h3 className="text-sm ml-8 text-[#2073BD] ">
          <Link to="" className="hover:border-b-2 hover:border-b-blue-400">
            {personIncharge}
          </Link>
        </h3>
      </div>
      <div className=" my-2 ">
        <h1 className="flex justify-start items-center">
          <i className="fa-brands fa-usps text-[#2073BD] text-lg mr-2"></i>
          <h2 className="font-semibold text-md  my-1 mx-1">
            Local Authority / Social Services
          </h2>
        </h1>
        <h3 className="text-sm ml-8 text-[#2073BD] ">
          <Link to="" className="hover:border-b-2 hover:border-b-blue-400">
            {localAuthority}
          </Link>
        </h3>
      </div>
      <div className=" my-2 ">
        <h1 className="flex justify-start items-center">
          <i className="fa-solid fa-user text-[#2073BD] text-lg mr-2"></i>
          <h2 className="font-semibold text-md my-1 mx-1">
            Admission Restrictions
          </h2>
        </h1>
        <h3 className="text-sm ml-8 text-[#2073BD] ">
          <Link to="" className="hover:border-b-2 hover:border-b-blue-400">
            {admissionRestrictionAge}+
          </Link>
        </h3>
      </div>
      <div className=" my-2 ">
        <h1 className="flex justify-start items-center">
          <i className="fa-solid fa-bed text-[#2073BD] text-lg mr-2"></i>
          <h2 className="font-semibold text-md my-1 mx-1">Room Information</h2>
        </h1>
        <h3 className="text-sm ml-8 text-[#2073BD] ">
          <Link to="" className="hover:border-b-2 hover:border-b-blue-400">
            {room.roomTypes} room {room.totalRoom}
          </Link>
        </h3>
      </div>
    </div>
  );
}
