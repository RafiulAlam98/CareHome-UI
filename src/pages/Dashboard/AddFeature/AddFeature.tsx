/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useForm } from "react-hook-form";
import { useAddFeatureMutation } from "../../../redux/features/featureApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";

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
    console.log(data);

    addFeature(data).then((res: any) => {
      console.log(res);
      if (res.data.statusCode === 200) {
        toast(res.data.message);
        reset();
        navigate("/");
      }
    });
  };
  return (
    <div className="min-h-screen">
      <h2 className="text-3xl text-teal-600 my-6">
        <span className="border-b-2 border-teal-300">Add New Care Home </span>
      </h2>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-4">
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">title?</span>
            </label>
            <input
              {...register("title", {
                required: "title Address is required",
              })}
              type="text"
              className="input input-bordered input-sm w-full "
            />
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">location?</span>
            </label>
            <input
              {...register("location", {
                required: "location is required",
              })}
              type="location"
              className="input input-bordered input-sm w-full "
            />
            {errors.location && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">owner?</span>
            </label>
            <input
              {...register("owner", {
                required: "owner is required",
              })}
              type="owner"
              className="input input-bordered input-sm w-full "
            />
            {errors.owner && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">price?</span>
            </label>
            <input
              {...register("price", {
                required: "price is required",
              })}
              type="price"
              className="input input-bordered input-sm w-full "
            />
            {errors.price && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">personIncharge?</span>
            </label>
            <input
              {...register("personIncharge", {
                required: "personIncharge is required",
              })}
              type="personIncharge"
              className="input input-bordered input-sm w-full "
            />
            {errors.personIncharge && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">localAuthority?</span>
            </label>
            <input
              {...register("localAuthority", {
                required: "localAuthority is required",
              })}
              type="text"
              className="input input-bordered input-sm w-full "
            />
            {errors.localAuthority && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">
                admissionRestrictionAge?
              </span>
            </label>
            <input
              {...register("admissionRestrictionAge", {
                required: "admissionRestrictionAge Address is required",
              })}
              type="text"
              className="input input-bordered input-sm w-full "
            />
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">quote?</span>
            </label>
            <textarea
              {...register("quote", {
                required: "quote Address is required",
              })}
              className="input input-bordered input-sm w-full "
            />
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">website?</span>
            </label>
            <input
              {...register("website", {
                required: "website is required",
              })}
              type="website"
              className="input input-bordered input-sm w-full "
            />
            {errors.website && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">logo?</span>
            </label>
            <input
              {...register("logo", {
                required: "logo is required",
              })}
              type="logo"
              className="input input-bordered input-sm w-full "
            />
            {errors.logo && (
              <span className="text-black">This field is required</span>
            )}
          </div>

          <div className="form-control lg:w-full mx-auto ">
            <label className="label">
              <span className="label-text text-black">img?</span>
            </label>
            <input
              {...register("img", {
                required: "img is required",
              })}
              type="img"
              className="input input-bordered input-sm w-full "
            />
            {errors.img && (
              <span className="text-black">This field is required</span>
            )}
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label>Total Rooms:</label>
            <Controller
              name="room.totalRoom"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <input
                  className="input input-bordered input-sm w-full "
                  {...field}
                />
              )}
            />
          </div>

          <div className="form-control lg:w-full mx-auto ">
            <label>Room Type:</label>
            <Controller
              name="room.roomTypes"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  className="input input-bordered input-sm w-full "
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-control lg:w-full mx-auto ">
            <label>Caring:</label>
            <Controller
              name="performance.caring"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="input input-bordered input-sm w-full "
                  type="text"
                />
              )}
            />
          </div>

          <div className="form-control lg:w-full mx-auto ">
            <label>Effective:</label>
            <Controller
              name="performance.effective"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="input input-bordered input-sm w-full "
                  type="text"
                />
              )}
            />
          </div>

          <div className="form-control lg:w-full mx-auto ">
            <label>Responsive:</label>
            <Controller
              name="performance.responsive"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="input input-bordered input-sm w-full "
                  type="text"
                />
              )}
            />
          </div>

          <div className="form-control lg:w-full mx-auto ">
            <label>Safe:</label>
            <Controller
              name="performance.safe"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="input input-bordered input-sm w-full "
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
            className="btn btn-sm mt-4 w-1/3 btn-accent text-white my-3"
          />
        )}
        {isError && <p className="text-red-600">Something went wrong</p>}
      </form>
    </div>
  );
}
