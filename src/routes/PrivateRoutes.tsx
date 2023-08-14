/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

type IProps = {
  children: ReactNode;
};

export default function PrivateRoutes({ children }: IProps | any) {
  const { user } = useSelector((state: any) => state.user);
  const location = useLocation();
  console.log(user);

  if (!user.token) {
    <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
}
