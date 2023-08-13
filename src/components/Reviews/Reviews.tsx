/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-hot-toast";
import { useGetReviewsQuery } from "../../redux/reviews/reviewApi";
import Loading from "../Loading/Loading";
import ReviewInformation from "./ReviewInformation";
import { IReviews } from "../../interface/review/review";

export default function Reviews({ id }: any) {
  const { data, error, isLoading } = useGetReviewsQuery(id);
  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return toast("Something Error happened");
  } else {
    toast(data.message);
  }

  const reviews = data.data;

  return (
    <section className="border mt-6">
      <h1 className="border text-2xl p-4 bg-[#F8F8FF] border-b border-[#2073BD] text-[#2073BD]">
        <span className=" font-semibold border-b border-[#2073BD] text-[#2073BD]">
          {" "}
          Reviews ( {reviews.length} )
        </span>
      </h1>
      <div className=" felx justify-between items-center">
        <div>
          {reviews.map((review: IReviews) => (
            <ReviewInformation review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
