/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from 'react-router-dom';
import SearchAndFilter from '../../../components/SearchAndFilter/SearchAndFilter';
import { useGetFeatureQuery } from '../../../redux/features/featureApi';
import { useState } from 'react';

export default function FeaturedSection() {
  const [searchText, setSearchText] = useState('');
  const [selectedField, setSelectedField] = useState('all');
  const { isLoading, data: featureData } = useGetFeatureQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 40000,
  });
  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  let features = featureData.data;

  const newFilteredList = features.filter((item: any) => {
    if (selectedField === item.title) {
      return item;
    } else if (selectedField === 'all') {
      return item;
    }
  });

  const filterableData = (payload: any) => {
    setSelectedField(payload);
  };

  return (
    <div className="bg-[#F8F8FF]">
      <SearchAndFilter
        setSearchText={setSearchText}
        searchText={searchText}
        features={features}
        filterableData={filterableData}
      />

      <div className="max-w-[1100px] py-10 mx-auto">
        <h3 className="text-2xl mb-10 text-teal-600 my-4 ">
          <span className="border-b-2 border-teal-400 ">
            Featured Care Home Groups
          </span>
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 ">
          {newFilteredList
            ?.filter((item: any) => {
              return searchText.toLowerCase() === ''
                ? item
                : item.title.toLowerCase().includes(searchText);
            })
            .map((feature: any) => (
              <Link key={feature._id} to={`/details/${feature._id}`}>
                <div className="card hover:border hover:border-teal-600  shadow-xl rounded min-h-full">
                  <img
                    src={feature.img[0]}
                    className="rounded-md w-full max-h-44"
                    alt=""
                  />
                  <div className="flex justify-around my-6 items-center px-2 my-3">
                    <h2 className="text-[#23527C] text-md font-serif text-md mr-2">
                      {feature.title}
                    </h2>
                    <img src={feature.logo} alt="" className="h-12 w-20" />
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
