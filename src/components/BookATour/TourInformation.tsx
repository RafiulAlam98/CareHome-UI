/* eslint-disable @typescript-eslint/no-explicit-any */

import Loading from '../Loading/Loading';
import { toast } from 'react-hot-toast';
import { useAddtourMutation } from '../../redux/tour/tourApi';
import { useForm } from 'react-hook-form';

export default function TourInformation() {
  const [addTour, { isLoading, isError }] = useAddtourMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    addTour(data).then((res: any) => {
      console.log(res.message);
      if (res.data.statusCode === 200) {
        toast(res.data.message);
        reset();
      }
    });
  };
  return (
    <div className=" min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-3xl text-orange-600 mt-5 mb-10  text-center font-serif font-semibold ">
          <span className="border-b-2 border-orange-600 ">
            Please Submit Your Information
          </span>
        </h2>
        <input
          placeholder="your name ex: john doe"
          {...register('name', { required: true })}
          className="input rounded input-bordered input-accent w-1/3 my-5 input-md  block mx-auto"
        />
        {errors.name && (
          <div className="text-red-600 text-center">This field is required</div>
        )}
        <input
          placeholder="your email ex: @example.com"
          {...register('email', { required: true })}
          className="input rounded input-bordered input-accent w-1/3 my-5 input-md  block mx-auto"
        />
        {errors.email && (
          <div className="text-red-600 text-center">This field is required</div>
        )}
        <input
          placeholder="your phone ex: 0123.."
          type="number"
          {...register('phone', { required: true })}
          className="input rounded input-bordered input-accent w-1/3 my-5 input-md  block mx-auto"
        />
        {errors.phone && (
          <div className="text-red-600 text-center">This field is required</div>
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <input
              type="submit"
              className="border block w-1/4 mt-2 hover:bg-black py-1 text-white  rounded-md bg-[#2073BD] mx-auto"
            />
          </>
        )}
      </form>
      {isError && <p>Something Went wrong</p>}
    </div>
  );
}
