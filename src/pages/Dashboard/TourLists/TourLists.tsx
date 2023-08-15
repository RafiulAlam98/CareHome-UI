import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import {
  useDeleteTourMutation,
  useGetAllTourQuery,
} from "../../../redux/tour/tourApi";
import { toast } from "react-hot-toast";

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
        navigate("/");
      }
    });
  };

  const tours = data.data;
  return (
    <div className="min-h-screen">
      {" "}
      <h2 className="text-2xl text-teal-600 my-6 text-center">
        <span className="border-b-2 border-teal-300 ">TOUR LIST </span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          {tours.map((tour: any, index: number) => (
            <tbody key={tour._id}>
              <tr>
                <th>{index + 1}</th>
                <td>{tour.name}</td>
                <td>{tour.email}</td>
                <td>{tour.phone}</td>

                <td>
                  <button
                    onClick={() => handleDelete(tour._id)}
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
