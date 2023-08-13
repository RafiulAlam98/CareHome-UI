import { toast } from "react-hot-toast";
import { useGetAwardQuery } from "../../redux/award/awardApi";
import Loading from "../Loading/Loading";
import AwardInformation from "./AwardInformation";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Award({ id }: any) {
  const { data, error, isLoading } = useGetAwardQuery(id);
  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return toast("Something Error happened");
  }

  const awards = data?.data;

  return (
    <section className="border mt-5">
      <h1 className="border text-2xl p-4 bg-[#F8F8FF]">
        Awards / Recognitions ({awards.length})
      </h1>
      {awards?.map((award: any) => (
        <AwardInformation award={award} />
      ))}
    </section>
  );
}
