/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type IProps = {
  children: ReactNode;
};

export default function PrivateRoutes({ children }: IProps | any) {
  const user = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  if (user === null) {
    return navigate("/login");
  }
  return children;
}
