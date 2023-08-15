/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { useAddReviewsMutation } from "../../redux/reviews/reviewApi";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function AddReview() {
  const [addReview, { isLoading, isError }] = useAddReviewsMutation();
  const id = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    addReview(data).then((res: any) => {
      console.log(res.message);
      if (res.data.statusCode === 200) {
        toast(res.data.message);
        reset();
      }
    });
  };
  return (
    <div className="min-h-screen">
      <h2 className="text-center text-2xl mb-6 mt-2 text-teal-500">
        <span className="border-b-2 border-teal-400">Add a Review</span>
      </h2>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          {" "}
          <div className="form-control lg:w-1/2 mx-auto ">
            <label className="label">
              <span className="label-text text-black">Care-home id</span>
            </label>
            <input
              defaultValue={id.id}
              {...register("homeId", {
                required: "homeId Address is required",
              })}
              type="text"
              className="input input-bordered input-sm w-full "
            />
          </div>
          <div className="form-control lg:w-1/2 mx-auto ">
            <label className="label">
              <span className="label-text text-black">Overall Experience</span>
            </label>
            <select
              {...register("overallExperience", {
                required: "overallExperience is required",
              })}
              className="select select-sm input-bordered input-sm w-full "
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.overallExperience && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-1/2 mx-auto ">
            <label className="label">
              <span className="label-text text-black">Submission Date</span>
            </label>
            <input
              {...register("dateSubmitted", {
                required: "dateSubmitted is required",
              })}
              type="date"
              className="input input-bordered input-sm w-full "
            />
            {errors.dateSubmitted && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-1/2 mx-auto ">
            <label className="label">
              <span className="label-text text-black">Your Name</span>
            </label>
            <input
              {...register("reviewerName", {
                required: "reviewerName is required",
              })}
              type="reviewerName"
              className="input input-bordered input-sm w-full "
            />
            {errors.reviewerName && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-1/2 mx-auto ">
            <label className="label">
              <span className="label-text text-black">Publish Date?</span>
            </label>
            <input
              {...register("reviewPublisDate", {
                required: "reviewPublisDate is required",
              })}
              type="date"
              className="input input-bordered input-sm w-full "
            />
            {errors.reviewPublisDate && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-1/2 mx-auto ">
            <label className="label">
              <span className="label-text text-black">Description</span>
            </label>
            <textarea
              {...register("reviewDescription", {
                required: "reviewDescription is required",
              })}
              className="input input-bordered  w-full "
            />
            {errors.reviewDescription && (
              <span className="text-black">This field is required</span>
            )}
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <input
            type="submit"
            className="btn btn-sm mt-4 w-1/3 btn-accent text-white my-3"
          />
        )}
      </form>
      {isError && <p>Something Went wrong</p>}
    </div>
  );
}
