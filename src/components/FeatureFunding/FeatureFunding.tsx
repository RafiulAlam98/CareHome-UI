export default function FeatureFunding() {
  return (
    <div>
      <h2 className="text-xl border-b-gray-200 border-b-2 font-semibold my-1">
        Funding & Fees Guide for <br /> Bullsmoor Lodge
      </h2>
      <div className=" my-2 ">
        <h1 className="flex justify-start items-center">
          <i className="fa-solid fa-hands-bound text-[#2073BD] text-xl mr-2"></i>
          <h2 className="font-semibold text-xl my-1 mx-1">
            Funding Types Accepted
          </h2>
        </h1>
        <h3 className="text-sm ml-8">Self funding (Private)</h3>
        <h3 className="text-sm ml-8">Local Authority with Top Up</h3>
        <h3 className="text-sm ml-8">
          NHS Continuing Healthcare (CHC) Funding
        </h3>
      </div>
      <div className=" my-2 ">
        <h1 className="flex justify-start items-center">
          <i className="fa-solid fa-bangladeshi-taka-sign text-[#2073BD] text-2xl"></i>

          <h2 className="font-semibold text-xl my-1 mx-1 ml-2">
            Weekly Charges per Person
          </h2>
        </h1>
        <h3 className="text-sm ml-8"></h3>
      </div>
    </div>
  );
}
