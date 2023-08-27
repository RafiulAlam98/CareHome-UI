/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate, useParams } from 'react-router-dom';

import Loading from '../../../components/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useAddAwardMutation } from '../../../redux/award/awardApi';
import { useForm } from 'react-hook-form';

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
    <div className="min-h-screen mb-10">
      {' '}
      <h2 className="text-3xl text-orange-600 my-30 text-center font-serif font-semibold mt-5 mb-8">
        <span className="border-b-2 border-orange-600">Add An Award </span>
      </h2>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-1/2 mx-auto mb-5">
          <div className="form-control mx-auto  ">
            <label className="label">
              <span className="label-text text-black">Home Id</span>
            </label>
            <input
              defaultValue={id.id}
              {...register('homeId', {
                required: 'homeId  is required',
              })}
              type="text"
              className="input input-bordered input-md rounded w-full my-3"
            />
          </div>
          <div className="form-control mx-auto   ">
            <label className="label">
              <span className="label-text text-black">Award Logo</span>
            </label>
            <input
              placeholder={`Award Logo ex: Link`}
              {...register('awardLogo', {
                required: 'awardLogo is required',
              })}
              type="text"
              className="input input-bordered input-md rounded w-full my-3"
            />
            {errors.location && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control mx-auto   ">
            <label className="label">
              <span className="label-text text-black">Award Title</span>
            </label>
            <input
              placeholder={`Award Title ex: Begam Rokaya`}
              {...register('awardTitle', {
                required: 'awardTitle is required',
              })}
              type="text"
              className="input input-bordered input-md rounded w-full my-3"
            />
            {errors.awardTitle && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control mx-auto   ">
            <label className="label">
              <span className="label-text text-black">Date</span>
            </label>
            <input
              {...register('date', {
                required: 'date is required',
              })}
              type="date"
              className="input input-bordered input-md rounded w-full my-3"
            />
            {errors.date && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control mx-auto   ">
            <label className="label">
              <span className="label-text text-black">Award Description</span>
            </label>
            <textarea
              placeholder={`Description write here`}
              {...register('awardDescription', {
                required: 'awardDescription is required',
              })}
              className="input input-bordered rounded my-3  w-full "
            />
            {errors.awardDescription && (
              <span className="text-black">This field is required</span>
            )}
          </div>

          {isLoading ? (
            <Loading />
          ) : (
            <div className="mx-auto w-1/2">
              {' '}
              <input
                type="submit"
                className="btn btn-sm  w-full btn-accent text-white mt-3 mb-6"
              />
            </div>
          )}
          {isError && <p className="text-red-600 mb-6">Something went wrong</p>}
        </div>
      </form>
    </div>
  );
}
