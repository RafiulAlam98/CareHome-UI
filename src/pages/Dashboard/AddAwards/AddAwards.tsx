/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAddAwardMutation } from "../../../redux/award/awardApi";
import Loading from "../../../components/Loading/Loading";
import { toast } from "react-hot-toast";

export default function AddAwards() {
  const [addAward, { isLoading, isError }] = useAddAwardMutation();
  const id = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },

    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);

    addAward(data).then((res: any) => {
      if (res.data.statusCode === 200) {
        toast(res.data.message);
        reset();
        navigate("/");
      }
    });
  };
  return (
    <div className="min-h-screen">
      {" "}
      <h2 className="text-3xl text-teal-600 my-6 text-center">
        <span className="border-b-2 border-teal-300">Add An Award </span>
      </h2>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="form-control mx-auto w-1/2 ">
            <label className="label">
              <span className="label-text text-black">homeId?</span>
            </label>
            <input
              defaultValue={id.id}
              {...register("homeId", {
                required: "homeId  is required",
              })}
              type="text"
              className="input input-bordered input-sm w-full "
            />
          </div>
          <div className="form-control mx-auto w-1/2  ">
            <label className="label">
              <span className="label-text text-black">awardLogo?</span>
            </label>
            <input
              {...register("awardLogo", {
                required: "awardLogo is required",
              })}
              type="awardLogo"
              className="input input-bordered input-sm w-full "
            />
            {errors.location && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control mx-auto w-1/2  ">
            <label className="label">
              <span className="label-text text-black">awardTitle?</span>
            </label>
            <input
              {...register("awardTitle", {
                required: "awardTitle is required",
              })}
              type="awardTitle"
              className="input input-bordered input-sm w-full "
            />
            {errors.awardTitle && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control mx-auto w-1/2  ">
            <label className="label">
              <span className="label-text text-black">date?</span>
            </label>
            <input
              {...register("date", {
                required: "date is required",
              })}
              type="date"
              className="input input-bordered input-sm w-full "
            />
            {errors.date && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control mx-auto w-1/2  ">
            <label className="label">
              <span className="label-text text-black">awardDescription?</span>
            </label>
            <textarea
              {...register("awardDescription", {
                required: "awardDescription is required",
              })}
              className="input input-bordered  w-full "
            />
            {errors.awardDescription && (
              <span className="text-black">This field is required</span>
            )}
          </div>

          {isLoading ? (
            <Loading />
          ) : (
            <div className="mx-auto w-1/3">
              {" "}
              <input
                type="submit"
                className="btn btn-sm mt-4 w-full btn-accent text-white my-3"
              />
            </div>
          )}
          {isError && <p className="text-red-600">Something went wrong</p>}
        </div>
      </form>
    </div>
  );
}
