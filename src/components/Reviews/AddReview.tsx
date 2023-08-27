/* eslint-disable @typescript-eslint/no-unused-vars */

import Loading from '../Loading/Loading';
import { toast } from 'react-hot-toast';
import { useAddReviewsMutation } from '../../redux/reviews/reviewApi';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

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
      <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold ">
        <span className="border-b-2 border-orange-600">Add Review</span>
      </h2>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-4 w-2/3 mx-auto">
          <div className="form-control   ">
            <label className="label">
              <span className="label-text text-black">Care Home Id</span>
            </label>
            <input
              defaultValue={id.id}
              {...register('homeId', {
                required: 'homeId Address is required',
              })}
              type="text"
              className="input input-bordered input-md rounded my-2 w-full "
            />
          </div>
          <div className="form-control   ">
            <label className="label">
              <span className="label-text text-black">Overall Experience</span>
            </label>
            <select
              {...register('overallExperience', {
                required: 'overallExperience is required',
              })}
              className="select select-md input-bordered input-md rounded my-2 w-full "
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
          <div className="form-control   ">
            <label className="label">
              <span className="label-text text-black">Submission Date</span>
            </label>
            <input
              {...register('dateSubmitted', {
                required: 'dateSubmitted is required',
              })}
              type="date"
              className="input input-bordered input-md rounded my-2 w-full "
            />
            {errors.dateSubmitted && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control   ">
            <label className="label">
              <span className="label-text text-black">Your Name</span>
            </label>
            <input
              placeholder={`Your name ex: john doe`}
              {...register('reviewerName', {
                required: 'reviewerName is required',
              })}
              type="reviewerName"
              className="input input-bordered input-md rounded my-2 w-full "
            />
            {errors.reviewerName && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control   ">
            <label className="label">
              <span className="label-text text-black">Publish Date</span>
            </label>
            <input
              {...register('reviewPublisDate', {
                required: 'reviewPublisDate is required',
              })}
              type="date"
              className="input input-bordered input-md rounded my-2 w-full "
            />
            {errors.reviewPublisDate && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control   ">
            <label className="label">
              <span className="label-text text-black">Description</span>
            </label>
            <textarea
              placeholder={`Description write here`}
              {...register('reviewDescription', {
                required: 'reviewDescription is required',
              })}
              className="input input-bordered  w-full rounded my-2"
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
            className="btn btn-sm  w-1/3  btn-accent text-white my-3"
          />
        )}
      </form>
      {isError && (
        <p className="text-3xl text-red-600 my-6">Something Went wrong</p>
      )}
    </div>
  );
}
