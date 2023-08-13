/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllUserQuery } from "../../../redux/users/usersApi";

export default function UserList() {
  const { data } = useGetAllUserQuery(undefined);
  console.log(data.data);
  const users = data.data;
  return (
    <div className="min-h-screen">
      {" "}
      <h2 className="text-2xl text-teal-600 my-6 text-center">
        <span className="border-b-2 border-teal-300 ">FEATURE LISTS </span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>
              <th>Phone</th>
            </tr>
          </thead>
          {users.map((user: any, index: number) => (
            <tbody key={user._id}>
              <tr>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.phone}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
