import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function BookATour() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    if (data !== null) {
      toast("Booking Confirmed Successfully");
      navigate("/");
    }
  };
  return (
    <>
      {" "}
      <button
        onClick={() => (window as any).book_tour.showModal()}
        className="bg-[#FF3547] text-sm text-white text-semibold font-normal px-2 py-1"
      >
        Book a Tour
      </button>
      <dialog id="book_tour" className="modal">
        <form
          method="dialog"
          className="modal-box text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <input
            type="submit"
            className="border block w-1/3 mt-2 hover:bg-black py-1 text-white  rounded-md bg-[#2073BD] mx-auto"
          />
        </form>
      </dialog>
    </>
  );
}
