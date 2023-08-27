/* eslint-disable @typescript-eslint/no-explicit-any */

import Loading from '../../../components/Loading/Loading';
import { useGetAllUserQuery } from '../../../redux/users/usersApi';

export default function UserList() {
  const { data, isLoading } = useGetAllUserQuery(undefined);
  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  const users = data.data;
  return (
    <div className="min-h-screen w-2/3 mx-auto">
      {' '}
      <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold ">
        <span className="border-b-2 border-orange-600 ">USER LIST </span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th className="text-xl text-slate-700">Email</th>
              <th className="text-xl text-slate-700">Role</th>
              <th className="text-xl text-slate-700">Phone</th>
            </tr>
          </thead>
          {users?.map((user: any, index: number) => (
            <tbody key={user._id}>
              <tr>
                <th className="text-lg font-semibold text-purple-600">
                  {index + 1}
                </th>
                <td className="text-lg font-semibold text-purple-600">
                  {user.email}
                </td>
                <td className="text-lg font-semibold text-purple-600">
                  {user.role}
                </td>
                <td className="text-lg font-semibold text-purple-600">
                  {user.phone}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
