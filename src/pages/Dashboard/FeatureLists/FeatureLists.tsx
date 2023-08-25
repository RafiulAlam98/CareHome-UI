 /* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-hot-toast";
import Loading from "../../../components/Loading/Loading";
import {
  useDeleteSingleCareHomeMutation,
  useGetFeatureQuery,
} from "../../../redux/features/featureApi";
import { useNavigate } from "react-router-dom";

export default function FeatureLists() {
  const { data, isLoading } = useGetFeatureQuery(undefined);
  const [deleteSingleCareHome] = useDeleteSingleCareHomeMutation();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }
  const handleDelete = (id: string) => {
    console.log(id);
    deleteSingleCareHome(id).then((res: any) => {
      if (res.data.statusCode === 200) {
        toast(res.data.message);
        navigate("/");
      }
    });
  };

  const features = data.data;
  return (
    <div className="min-h-screen">
      {" "}
      <h2 className="text-2xl text-teal-600 my-6 text-center">
        <span className="border-b-2 border-teal-300 ">CARE HOME LIST </span>
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
                <td>
                  <button
                    onClick={() => handleDelete(feature._id)}
                    className="bg-red-600 text-white p-2 rounded "
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
