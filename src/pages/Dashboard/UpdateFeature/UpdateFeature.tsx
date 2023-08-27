/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate, useParams } from 'react-router-dom';

import Loading from '../../../components/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useAddCareTypeMutation } from '../../../redux/careTypes/careTypeApi';
import { useForm } from 'react-hook-form';

export default function UpdateFeature() {
  const [addCareType, { isLoading, isError }] = useAddCareTypeMutation();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);

    addCareType({ id, data }).then((res: any) => {
      console.log(res.message);
      if (res.data.statusCode === 200) {
        toast(res.data.message);
        reset();
        navigate('/');
      }
    });
  };
  return (
    <div className="min-h-screen">
      {' '}
      <h2 className="text-3xl text-orange-600 my-30 text-center font-serif font-semibold mt-5 mb-8">
        <span className="border-b-2 border-orange-600">Update CareHome</span>
      </h2>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-1/2 mx-auto">
          <div className="form-control mx-auto   ">
            <label className="label">
              <span className="label-text text-black">
                Type Of Care Provided
              </span>
            </label>
            <input
              placeholder={`Care Type paste here ex: Nursing`}
              {...register('careTypes', {
                required: 'care type is required',
              })}
              type="text"
              className="input input-bordered rounded input-md w-full "
            />
          </div>

          {isLoading ? (
            <Loading />
          ) : (
            <div className="mx-auto w-1/2">
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
