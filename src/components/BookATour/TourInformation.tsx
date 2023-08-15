/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useAddtourMutation } from "../../redux/tour/tourApi";
import { toast } from "react-hot-toast";
import Loading from "../Loading/Loading";

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
    <div className="min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center text-red-400 text-xl mb-6 ">
          Please Submit Your Information
        </h2>
        <input
          defaultValue=""
          placeholder="name"
          {...register("name", { required: true })}
          className="input rounded-sm input-bordered input-accent w-2/3 my-1 input-sm block mx-auto"
        />
        {errors.name && (
          <span className="text-red-600">This field is required</span>
        )}
        <input
          defaultValue=""
          placeholder="email"
          {...register("email", { required: true })}
          className="input rounded-sm input-bordered input-accent w-2/3 my-1 input-sm block mx-auto"
        />
        {errors.email && (
          <span className="text-red-600">This field is required</span>
        )}
        <input
          defaultValue=""
          placeholder="phone"
          {...register("phone", { required: true })}
          className="input rounded-sm input-bordered input-accent w-2/3 my-1 input-sm block mx-auto"
        />
        {errors.phone && (
          <span className="text-red-600">This field is required</span>
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <input
              type="submit"
              className="border block w-1/3 mt-2 hover:bg-black py-1 text-white  rounded-md bg-[#2073BD] mx-auto"
            />
          </>
        )}
      </form>
      {isError && <p>Something Went wrong</p>}
    </div>
  );
}
