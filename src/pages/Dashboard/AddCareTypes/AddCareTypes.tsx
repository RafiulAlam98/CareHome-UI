/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export default function AddCareTypes() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const id = useParams();
  console.log(id.id);

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen">
      <h2 className="text-center text-2xl mb-6 mt-2 text-teal-500">
        <span className="border-b-2 border-teal-400">Add Care Types</span>
      </h2>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          {' '}
          <div className="form-control  mx-auto ">
            <label className="label">
              <span className="label-text text-black">Care-home id</span>
            </label>
            <input
              defaultValue={id.id}
              {...register('homeId', {
                required: 'homeId Address is required',
              })}
              type="text"
              className="input input-bordered input-sm w-full rounded"
            />
          </div>
          <div className="form-control mx-auto ">
            <label className="label">
              <span className="label-text text-black">Type of Care</span>
            </label>
            <input
              {...register('careType', {
                required: 'careType is required',
              })}
              type="text"
              className="input input-bordered input-sm w-full rounded"
            />
            {errors.careType && (
              <span className="text-black">This field is required</span>
            )}
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-sm mt-4 w-1/3 btn-accent text-white my-3"
        />
      </form>
      {/* {isError && <p>Something Went wrong</p>} */}
    </div>
  );
}
