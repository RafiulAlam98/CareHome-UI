/* eslint-disable @typescript-eslint/no-unused-vars */

import { toast } from "react-hot-toast";
import { useDeleteNewsEventMutation } from "../../redux/newEvent/newEventApi";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function NewsEventInformation({ event }: any) {
  const { totalEvent, totalNews } = event;
  const navigate = useNavigate();
  const [deleteNewsEvent, options] = useDeleteNewsEventMutation();
  const handleDeleteEvent = (payload: any) => {
    const id = payload._id;
    console.log(id);
    if (options.isLoading) {
      return <Loading />;
    }
    deleteNewsEvent(id).then((res: any) => {
      if (res.data.statusCode === 200) {
        navigate("/");
        toast(res.data.message);
      }
    });
  };
  return (
    <section className="border p-4">
      {event ? (
        <>
          <h1 className="font-medium text-lg my-1">Total Event {totalEvent}</h1>
          <h3 className="mb-5">total news {totalNews}</h3>
          <button
            onClick={() => handleDeleteEvent(event)}
            className="text-sm bg-red-600 hover:bg-red-800 text-white rounded px-3 py-1"
          >
            Delete Event
          </button>
        </>
      ) : (
        <h2>There is no such event</h2>
      )}
    </section>
  );
}
