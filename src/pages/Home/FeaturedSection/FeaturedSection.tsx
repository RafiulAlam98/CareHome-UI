/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { useGetFeatureQuery } from "../../../redux/features/featureApi";

export default function FeaturedSection() {
  const { isLoading, data: featureData } = useGetFeatureQuery(undefined);
  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  console.log(featureData.data);

  const features = featureData.data;
  console.log(features);
  return (
    <div className="bg-[#F8F8FF]">
      <div className="max-w-[1200px] py-10 mx-auto">
        <h3 className="text-md mb-5">Featured Care Home Groups</h3>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ">
          {features.map((feature: any) => (
            <Link to={`/details/${feature._id}`}>
              <div
                key={feature._id}
                className="card hover:border hover:border-red-400  shadow-xl"
              >
                <img src={feature.img} className="rounded-md" alt="Shoes" />
                <div className="flex justify-around my-6 items-center">
                  <h2 className="text-[#23527C] text-md">{feature.title}</h2>
                  <img src={feature.logo} alt="" className="w-1/3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
