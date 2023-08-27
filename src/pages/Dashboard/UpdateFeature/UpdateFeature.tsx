/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate, useParams } from 'react-router-dom';

import { useForm } from 'react-hook-form';

export default function UpdateFeature() {
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
  };
  return (
    <div className="min-h-screen">
      {' '}
      <h2 className="text-3xl text-teal-600 my-6 text-center">
        <span className="border-b-2 border-teal-300">Update CareHome</span>
      </h2>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-1/2 mx-auto">
          <div className="form-control mx-auto  ">
            <label className="label">
              <span className="label-text text-black">homeId?</span>
            </label>
            <input
              defaultValue={id.id}
              {...register('homeId', {
                required: 'homeId  is required',
              })}
              type="text"
              className="input input-bordered rounded input-sm w-full "
            />
          </div>

          <div className="form-control mx-auto   ">
            <label className="label">
              <span className="label-text text-black">care type?</span>
            </label>
            <input
              {...register('careTypes', {
                required: 'care type is required',
              })}
              type="text"
              className="input input-bordered rounded input-sm w-full "
            />
          </div>

          <div className="form-control mx-auto   ">
            <label className="label">
              <span className="label-text text-black">img?</span>
            </label>
            <input
              {...register('img', {
                required: 'img is required',
              })}
              className="input input-bordered rounded input-sm w-full "
            />
          </div>

          {/* {isLoading ? (
            <Loading />
          ) : (
            <div className="mx-auto w-1/3">
              {' '}
              <input
                type="submit"
                className="btn btn-sm mt-4 w-full btn-accent text-white my-3"
              />
            </div>
          )}
          {isError && <p className="text-red-600">Something went wrong</p>} */}
        </div>
      </form>
    </div>
  );
}
