/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { useGetFeatureQuery } from "../../../redux/features/featureApi";
import SearchAndFilter from "../../../components/SearchAndFilter/SearchAndFilter";
import { useState } from "react";
import Fuse from "fuse.js";

export default function FeaturedSection() {
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const { isLoading, data: featureData } = useGetFeatureQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 40000,
  });
  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  let features = featureData.data;

  if (features) {
    const options = {
      keys: ["title", "owner", "localAuthority"],
      threshold: 0.4,
    };
    const fuse = new Fuse(features, options);
    const searchResults = fuse.search(searchText);

    features =
      searchResults.length > 0
        ? searchResults.map((result) => result.item)
        : features;
  }

  return (
    <div className="bg-[#F8F8FF]">
      <SearchAndFilter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <div className="max-w-[1200px] py-10 mx-auto">
        <h3 className="text-md mb-5">Featured Care Home Groups</h3>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ">
          {features?.map((feature: any) => (
            <Link to={`/details/${feature._id}`}>
              <div
                key={feature._id}
                className="card hover:border hover:border-red-400  shadow-xl"
              >
                <img src={feature.img[0]} className="rounded-md" alt="Shoes" />
                <div className="flex justify-around my-6 items-center">
                  <h2 className="text-[#23527C] text-md">{feature.title}</h2>
                  <img src={feature.logo} alt="" className="w-1/3" />
                </div>
              </div>
            </Link>
          ))}
          {features === null && <div>No data available</div>}
        </div>
      </div>
    </div>
  );
}
