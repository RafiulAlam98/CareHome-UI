 /* eslint-disable @typescript-eslint/no-explicit-any */

import { Link, useNavigate } from 'react-router-dom';
import {
  useDeleteSingleCareHomeMutation,
  useGetFeatureQuery,
} from '../../../redux/features/featureApi';

import Loading from '../../../components/Loading/Loading';
import { toast } from 'react-hot-toast';

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
        navigate('/');
      }
    });
  };

  const handleUpdate = (id: string) => {
    console.log(id);
  };

  const features = data.data;
  return (
    <div className="min-h-screen w-2/3 mx-auto">
      <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold ">
        <span className="border-b-2 border-orange-600 ">CARE HOME LIST </span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th className="text-xl text-slate-700">Name</th>
              <th className="text-xl text-slate-700">Location</th>
              <th className="text-xl text-slate-700">Authority</th>
              <th className="text-xl text-slate-700">Incharge Officer</th>
            </tr>
          </thead>
          {features.map((feature: any, index: number) => (
            <tbody key={feature._id}>
              <tr>
                <th className="text-lg font-semibold text-purple-600">
                  {index + 1}
                </th>
                <td className="text-lg font-semibold text-purple-600">
                  {feature.title}
                </td>
                <td className="text-lg font-semibold text-purple-600">
                  {feature.location}
                </td>
                <td className="text-lg font-semibold text-purple-600">
                  {feature.localAuthority}
                </td>
                <td className="text-lg font-semibold text-purple-600">
                  {feature.personIncharge}
                </td>

                <td>
                  <Link to={`/dashboard/update-feature/${feature._id}`}>
                    <button
                      onClick={() => handleUpdate(feature._id)}
                      className="bg-[#059862] text-white p-2 rounded"
                    >
                      UPDATE
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/dashboard/news-event/${feature._id}`}>
                    <button className="bg-[#059862] text-white p-2 rounded">
                      Event
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/dashboard/award/${feature._id}`}>
                    <button className="bg-[#059862] text-white p-2 rounded">
                      Award
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(feature._id)}
                    className="bg-red-600 text-white p-2 rounded hover-red-700"
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
