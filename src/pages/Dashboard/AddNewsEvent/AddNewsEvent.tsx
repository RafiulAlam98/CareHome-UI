/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { useAddNewsEventMutation } from "../../../redux/newEvent/newEventApi";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Loading from "../../../components/Loading/Loading";

export default function AddNewsEvent() {
  const [addNewsEvent, { isLoading, isError }] = useAddNewsEventMutation();
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

    addNewsEvent(data).then((res: any) => {
      if (res.data.statusCode === 200) {
        toast(res.data.message);
        reset();
        navigate("/");
      }
    });
  };
  return (
    <div className="min-h-screen mx-auto">
      {" "}
      <h2 className="text-3xl text-teal-600 my-6 text-center">
        <span className="border-b-2 border-teal-300 ">Add NewsEvent</span>
      </h2>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="form-control lg:w-1/2 mx-auto">
            <label className="label">
              <span className="label-text text-black">homeId?</span>
            </label>
            <input
              defaultValue={id.id}
              disabled
              {...register("homeId", {
                required: "homeId  is required",
              })}
              type="text"
              className="input input-bordered input-sm w-full "
            />
          </div>
          <div className="form-control lg:w-1/2 mx-auto">
            <label className="label">
              <span className="label-text text-black">totalEvent?</span>
            </label>
            <input
              {...register("totalEvent", {
                required: "totalEvent is required",
              })}
              type="number"
              className="input input-bordered input-sm w-full "
            />
            {errors.totalNews && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-1/2 mx-auto">
            <label className="label">
              <span className="label-text text-black">totalNews?</span>
            </label>
            <input
              {...register("totalNews", {
                required: "totalNews is required",
              })}
              type="number"
              className="input input-bordered input-sm w-full "
            />
            {errors.totalNews && (
              <span className="text-black">This field is required</span>
            )}
          </div>

          {isLoading ? (
            <Loading />
          ) : (
            <div className=" lg:w-1/2 mx-auto">
              {" "}
              <input
                type="submit"
                className="btn btn-sm mt-4 w-1/2 btn-accent text-white my-3"
              />
            </div>
          )}
          {isError && <p className="text-red-600">Something went wrong</p>}
        </div>
      </form>
    </div>
  );
}
