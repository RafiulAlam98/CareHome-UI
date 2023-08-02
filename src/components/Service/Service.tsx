/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Service({ careHomeService }: any) {
  const { serviceTitle } = careHomeService;
  return (
    <div>
      <h2 className="text-xl border-b-gray-200 border-b-2 font-semibold my-1">
        Care Provided by Bullsmoor <br /> Lodge
      </h2>
      <div className=" my-2 ">
        <h1 className="flex justify-start items-center">
          <i className="fa-brands fa-ups mr-2 text-[#2073BD] text-2xl"></i>
          <h2 className="font-semibold text-xl my-1 mx-1">Type of Service</h2>
        </h1>
        <h3 className="text-sm ml-8">{serviceTitle}</h3>
      </div>
      <div className=" my-2 ">
        <h1 className="flex justify-start items-center">
          <i className="fa-brands fa-creative-commons-by text-[#2073BD] text-2xl"></i>
          <h2 className="font-semibold text-xl my-1 mx-1">
            Registered Categories*
          </h2>
        </h1>
        <h3 className="text-sm ml-8">
          Dementia/Alzheimer's Old Age/Elderly Care Younger Adults
        </h3>
      </div>
      <div className=" my-2 ">
        <h1 className="flex justify-start items-center">
          <i className="fa-solid fa-person-walking-with-cane text-[#2073BD] text-2xl"></i>
          <h2 className="font-semibold text-xl my-1 mx-1">
            Specialist Care Categories
          </h2>
        </h1>
        <h3 className="text-sm ml-8">
          Alzheimer's Bariatric Care/Obesity Bipolar/Manic Depression
          Challenging Behaviour/Psychosis Hearing Impairment Parkinson's Disease
          Speech Impairment Stroke Visual Impairment
        </h3>
      </div>
      <div className=" my-2 ">
        <h1 className="flex justify-start items-center">
          <i className="fa-solid fa-hand-holding-heart text-[#2073BD] text-2xl"></i>
          <h2 className="font-semibold text-xl my-1 mx-1">
            Other Care Provided
          </h2>
        </h1>
        <h3 className="text-sm ml-8">
          Convalescent Care Day Care Own GP if required Palliative Care
          Physiotherapy Respite Care
        </h3>
      </div>
    </div>
  );
}
