/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Performance({ performance }: any) {
  const { caring, effective, responsive, safe } = performance;
  return (
    <section className="border mt-8">
      <h1 className="border text-2xl p-4 bg-[#F8F8FF]">Performance</h1>
      <h2 className="text-xl m-4">Care Quality Commission (CQC) Rating</h2>

      <div className="grid grid-cols-2 gap-4 mx-auto">
        <div className="flex p-4">
          <div className="bg-[#458F00] rounded-md px-8 py-12 mr-10">
            <h3 className="text-xl  font-semibold flex flex-col justify-center items-center text-white">
              Overall <br />
              Good
            </h3>
          </div>
          <div className="my-5">
            <div className="flex items-center justify-between">
              <h3 className="mr-10">Caring</h3>
              <h3 className="text-sm">{caring}</h3>
            </div>
            <hr className="mt-4" />
            <div className="flex items-center justify-between">
              <h3 className="mr-10">Effective</h3>
              <h3 className="text-sm">{effective}</h3>
            </div>
            <hr className="mt-4" />
            <div className="flex items-center justify-between">
              <h3 className="mr-10">Responsive</h3>
              <h3 className="text-sm">{responsive}</h3>
            </div>
            <hr className="mt-4" />
            <div className="flex items-center justify-between">
              <h3 className="mr-10">Safe</h3>
              <h3 className="text-sm">{safe}</h3>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl ">
            Care Quality Commission is responsible for the registration and
            inspection of social care services in Dhaka.
          </h3>
        </div>
      </div>
    </section>
  );
}
