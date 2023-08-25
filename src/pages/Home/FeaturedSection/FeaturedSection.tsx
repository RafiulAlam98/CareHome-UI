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
        <h3 className="text-2xl mb-10 text-teal-600 my-4 ">
          <span className="border-b-2 border-teal-400 ">
            Featured Care Home Groups
          </span>
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ">
          {features?.map((feature: any) => (
            <Link key={feature._id} to={`/details/${feature._id}`}>
              <div className="card hover:border hover:border-teal-600  shadow-xl rounded min-h-full">
                <img
                  src={feature.img[0]}
                  className="rounded-md w-full max-h-44"
                  alt=""
                />
                <div className="flex justify-around my-6 items-center">
                  <h2 className="text-[#23527C] text-md font-serif text-lg">
                    {feature.title}
                  </h2>
                  <img src={feature.logo} alt="" className="h-12 w-24" />
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
