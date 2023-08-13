/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetFeatureQuery } from "../../../redux/features/featureApi";

export default function FeatureLists() {
  const { data } = useGetFeatureQuery(undefined);
  console.log(data.data);
  const features = data.data;
  return (
    <div className="min-h-screen">
      {" "}
      <h2 className="text-2xl text-teal-600 my-6 text-center">
        <span className="border-b-2 border-teal-300 ">FEATURE LISTS </span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Location</th>
              <th>Authority</th>
              <th>Incharge Officer</th>
            </tr>
          </thead>
          {features.map((feature: any, index: number) => (
            <tbody key={feature._id}>
              <tr>
                <th>{index + 1}</th>
                <td>{feature.title}</td>
                <td>{feature.location}</td>
                <td>{feature.localAuthority}</td>
                <td>{feature.personIncharge}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
