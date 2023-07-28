import { useForm } from "react-hook-form";

export default function Searching() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data: object) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
      <h1 className="my-2"> Searching Option Coming Soon...</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue=""
          placeholder="Search here"
          {...register("example")}
          className="input rounded-sm input-bordered input-accent w-1/3 input-sm"
        />
        <input
          defaultValue=""
          placeholder="Search here"
          {...register("example")}
          className="input rounded-sm input-bordered input-accent w-2/3 input-sm"
        />
        <input
          type="submit"
          placeholder="Search"
          className="border w-full mt-2 hover:bg-black py-1 text-white  rounded-md bg-[#2073BD]"
        />
      </form>
    </div>
  );
}
