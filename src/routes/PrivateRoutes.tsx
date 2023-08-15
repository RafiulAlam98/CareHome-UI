/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase.init";
import Loading from "../components/Loading/Loading";

type IProps = {
  children: ReactNode;
};

export default function PrivateRoute({ children }: IProps | any) {
  const [user, loading] = useAuthState(auth);
  console.log(user?.email);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
