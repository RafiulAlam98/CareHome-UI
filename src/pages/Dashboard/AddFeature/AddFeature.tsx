/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller, useForm } from 'react-hook-form';

import Loading from '../../../components/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useAddFeatureMutation } from '../../../redux/features/featureApi';
import { useNavigate } from 'react-router-dom';

export default function AddFeature() {
  const [addFeature, { isError, isLoading }] = useAddFeatureMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    addFeature(data).then((res: any) => {
      console.log(res);
      if (res.data.statusCode === 200) {
        toast(res.data.message);
        reset();
        navigate('/');
      }
    });
  };
  return (
    <div className="min-h-screen">
      <h2 className="text-3xl text-teal-600 my-6 text-center">
        <span className="border-b-2 border-teal-300 ">Add New Care Home </span>
      </h2>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4 w-2/3 mx-auto">
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Title</span>
            </label>
            <input
              placeholder={`Title in text`}
              {...register('title', {
                required: 'title Address is required',
              })}
              type="text"
              className="input input-bordered rounded input-md w-full "
            />
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Location</span>
            </label>
            <input
              placeholder={`Location in text`}
              {...register('location', {
                required: 'location is required',
              })}
              type="location"
              className="input input-bordered rounded input-md w-full "
            />
            {errors.location && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Owner</span>
            </label>
            <input
              placeholder={`Owner In text`}
              {...register('owner', {
                required: 'owner is required',
              })}
              type="owner"
              className="input input-bordered rounded input-md w-full "
            />
            {errors.owner && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Price</span>
            </label>
            <input
              placeholder={`Price in number`}
              {...register('price', {
                required: 'price is required',
              })}
              type="price"
              className="input input-bordered rounded input-md w-full "
            />
            {errors.price && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Person In Charge</span>
            </label>
            <input
              placeholder={`Person In Charge in text`}
              {...register('personIncharge', {
                required: 'personIncharge is required',
              })}
              type="personIncharge"
              className="input input-bordered rounded input-md w-full "
            />
            {errors.personIncharge && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Local Authority</span>
            </label>
            <input
              placeholder={`Local Authority in text`}
              {...register('localAuthority', {
                required: 'localAuthority is required',
              })}
              type="text"
              className="input input-bordered rounded input-md w-full "
            />
            {errors.localAuthority && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">
                Admission Restriction Age
              </span>
            </label>
            <input
              placeholder={`Admission Restriction age in text`}
              {...register('admissionRestrictionAge', {
                required: 'admissionRestrictionAge Address is required',
              })}
              type="text"
              className="input input-bordered rounded input-md w-full "
            />
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Related Quote</span>
            </label>
            <textarea
              placeholder={`Related Quote in text`}
              cols={50}
              rows={4}
              {...register('quote', {
                required: 'quote Address is required',
              })}
              className="input input-bordered rounded input-md w-full "
            />
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Website</span>
            </label>
            <input
              placeholder={`Website in Link`}
              {...register('website', {
                required: 'website is required',
              })}
              type="website"
              className="input input-bordered rounded input-md w-full "
            />
            {errors.website && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Care Home Logo</span>
            </label>
            <input
              placeholder={`Logo in Link`}
              {...register('logo', {
                required: 'logo is required',
              })}
              type="text"
              className="input input-bordered rounded  input-md w-full "
            />
            {errors.logo && (
              <span className="text-black">This field is required</span>
            )}
          </div>

          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Care Home Img</span>
            </label>
            <input
              placeholder={`Image in Link`}
              {...register('img', {
                required: 'img is required',
              })}
              type="text"
              className="input input-bordered rounded  input-md w-full "
            />
            {errors.img && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Total Rooms </span>
            </label>
            <Controller
              name="room.totalRoom"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <input
                  placeholder={`Total Room in number`}
                  className="input input-bordered rounded input-md w-full"
                  {...field}
                />
              )}
            />
          </div>

          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Room Type</span>
            </label>

            <Controller
              name="room.roomTypes"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  placeholder={`Room Type ex: single`}
                  className="input input-bordered rounded input-md w-full "
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Caring Service</span>
            </label>

            <Controller
              name="performance.caring"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  placeholder={`Performance ex: Good`}
                  {...field}
                  className="input input-bordered rounded input-md w-full "
                  type="text"
                />
              )}
            />
          </div>

          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Effectiveness</span>
            </label>

            <Controller
              name="performance.effective"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  placeholder={`Effectiveness in text`}
                  {...field}
                  className="input input-bordered rounded input-md w-full "
                  type="text"
                />
              )}
            />
          </div>

          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Responsiveness</span>
            </label>

            <Controller
              name="performance.responsive"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  placeholder={`Responsiveness in text`}
                  {...field}
                  className="input input-bordered rounded input-md w-full "
                  type="text"
                />
              )}
            />
          </div>

          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">Safety Quality</span>
            </label>

            <Controller
              name="performance.safe"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  placeholder={`Safety Quality in text`}
                  {...field}
                  className="input input-bordered rounded input-md w-full "
                  type="text"
                />
              )}
            />
          </div>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <input
            type="submit"
            className="btn btn-md rounded w-1/3 btn-accent text-white my-8 "
          />
        )}
        {isError && (
          <p className="text-red-600 text-xl mt-8">Something went wrong</p>
        )}
      </form>
    </div>
  );
}
