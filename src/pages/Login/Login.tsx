/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    if (data !== null) {
      toast("User logged in Successfully");
      navigate("/");
    }
  };
  return (
    <div className="h-[500px] background  flex justify-center items-center">
      <div className="w-96  backgr">
        <h2 className="text-4xl text-center mb-5 text-black">Please Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-black">What is your email?</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              className="input input-bordered w-full "
            />
            {errors.role && (
              <span className="text-black">This field is required</span>
            )}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>
            <input type="password" className="input input-bordered w-full " />
            {errors.password && (
              <span className="text-black">This field is required</span>
            )}
          </div>

          <input
            type="submit"
            className="btn w-full btn-accent text-black my-3"
          />
        </form>
        <p className="text-black">
          Not an account?
          <Link to="/sign-up" className="text-secondary ml-2">
            Sign Up
          </Link>
        </p>
        <div className="divider text-black font-bold">OR</div>
        <button className="btn btn-outline bg-white w-full">
          Continue With Google
        </button>
      </div>
    </div>
  );
}
