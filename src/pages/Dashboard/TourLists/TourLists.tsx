import {
  useDeleteTourMutation,
  useGetAllTourQuery,
} from '../../../redux/tour/tourApi';

import Loading from '../../../components/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function TourLists() {
  const { data, isLoading } = useGetAllTourQuery(undefined);
  const [deleteTour] = useDeleteTourMutation();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }
  const handleDelete = (id: string) => {
    console.log(id);
    deleteTour(id).then((res: any) => {
      if (res.data.statusCode === 200) {
        toast(res.data.message);
        navigate('/');
      }
    });
  };

  const tours = data.data;
  return (
    <div className="min-h-screen w-2/3 mx-auto">
      {' '}
      <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold ">
        <span className="border-b-2 border-orange-600 ">TOUR LIST </span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th className="text-xl text-slate-700">Name</th>
              <th className="text-xl text-slate-700">Email</th>
              <th className="text-xl text-slate-700">Phone</th>
            </tr>
          </thead>
          {tours.map((tour: any, index: number) => (
            <tbody key={tour._id}>
              <tr>
                <th className="text-lg font-semibold text-purple-600">
                  {index + 1}
                </th>
                <td className="text-lg font-semibold text-purple-600">
                  {tour.name}
                </td>
                <td className="text-lg font-semibold text-purple-600">
                  {tour.email}
                </td>
                <td className="text-lg font-semibold text-purple-600">
                  {tour.phone}
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(tour._id)}
                    className="bg-red-600 text-white p-2 rounded hover:bg-red-800"
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
