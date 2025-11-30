import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "https://zap-shift-server-omega-ten.vercel.app",
});

const useAxiosSecure = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // interceptor request
    const reqInterceptors = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });

    // interceptor response
    const resInterceptors = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        console.log(err);
        const statusCode = err.status;
        if (statusCode === 401 || statusCode === 403) {
          logoutUser().then(() => {
            navigate("/login");
          });
        }

        return Promise.reject(err);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptors);
      axiosSecure.interceptors.response.eject(resInterceptors);
    };
  }, [user, logoutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
