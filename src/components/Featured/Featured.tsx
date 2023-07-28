import "./Featured.css";
export default function Featured({ feature }) {
  console.log(feature);
  return (
    <>
      <div className="card hover:border hover:border-red-400  shadow-xl">
        <img src={feature.img} className="rounded-md" alt="Shoes" />
        <div className="flex justify-around my-6 items-center">
          <h2 className="text-[#23527C] text-md">{feature.title}</h2>
          <img src={feature.logo} alt="" className="w-1/3" />
        </div>
      </div>
    </>
  );
}
