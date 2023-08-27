/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate, useParams } from "react-router-dom";

import Loading from "../../../components/Loading/Loading";
import { toast } from "react-hot-toast";
import { useAddNewsEventMutation } from "../../../redux/newEvent/newEventApi";
import { useForm } from "react-hook-form";

export default function AddNewsEvent() {
  const [addNewsEvent, { isLoading }] = useAddNewsEventMutation();
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
      {' '}
      <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold">
        <span className="border-b-2 border-orange-600 ">Add NewsEvent</span>
      </h2>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-2/3 mx-auto">
          {' '}
          <div className="form-control  mx-auto ">
            <label className="label">
              <span className="label-text ">Care home id</span>
            </label>
            <input
              defaultValue={id.id}
              {...register('homeId', {
                required: 'homeId Address is required',
              })}
              type="text"
              className="input input-bordered input-md rounded w-full "
            />
          </div>
          <div className="form-control  mx-auto ">
            <label className="label">
              <span className="label-text ">Total Event</span>
            </label>
            <input
              {...register('totalEvent', {
                required: 'totalEvent is required',
              })}
              placeholder={`Total Event ex: 1`}
              className="input input-md rounded input-bordered  w-full "
            />
            {errors.totalEvent && (
              <span className="">This field is required</span>
            )}
          </div>
          <div className="form-control  mx-auto ">
            <label className="label">
              <span className="label-text ">Total News</span>
            </label>
            <input
              placeholder={`Total News ex: 1`}
              {...register('totalNews', {
                required: 'total News is required',
              })}
              className="input input-md rounded input-bordered  w-full "
            />
            {errors.totalNews && (
              <span className="">This field is required</span>
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
    </div>
  );
}
