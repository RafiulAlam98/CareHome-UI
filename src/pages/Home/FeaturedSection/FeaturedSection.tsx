import Featured from "../../../components/Featured/Featured";
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
    <div className="max-w-[1200px]  mx-auto">
      <h3 className="text-md ">Featured Care Home Groups</h3>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {features.map((feature: object) => (
          <Featured feature={feature} />
        ))}
      </div>
    </div>
  );
}
