import { useNavigate } from "react-router-dom";
import { useDeleteAwardMutation } from "../../redux/award/awardApi";
import Loading from "../Loading/Loading";
import { toast } from "react-hot-toast";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function AwardInformation({ award }: any) {
  const { awardTitle, awardDescription } = award;
  const navigate = useNavigate();
  const [deleteAward, options] = useDeleteAwardMutation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDeleteAward = (payload: any) => {
    const id = payload._id;
    console.log(id);
    if (options.isLoading) {
      return <Loading />;
    }
    deleteAward(id).then((res: any) => {
      if (res.data.statusCode === 200) {
        navigate("/");
        toast(res.data.message);
      }
    });
  };
  return (
    <section className="border p-4">
      {award ? (
        <>
          <h1 className="font-medium text-lg my-1">
            {awardTitle} <br />
          </h1>
          <h3>{awardDescription}</h3>
          <button
            onClick={() => handleDeleteAward(award)}
            className="text-sm bg-red-600 hover:bg-red-800 text-white rounded px-3 py-1"
          >
            Delete Event
          </button>
        </>
      ) : (
        <>
          <h2 className="text-2xl">There is no such award</h2>
        </>
      )}
    </section>
  );
}
