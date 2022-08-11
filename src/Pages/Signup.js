import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../Firebase/firebase.init";
import {useLocation, useNavigate} from 'react-router-dom';
import Loading from "./Shared/Loading";

const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    emailCreateUser,
    emailCreateLoading,
    emailCreateError,
  ] = useCreateUserWithEmailAndPassword(auth);
  let errorElement;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };

  if (emailCreateLoading) {
    return <Loading></Loading>;
  }
  if (emailCreateError) {
    errorElement = (
      <p className="text-center text-xs text-red-600">
        {emailCreateError.message}
      </p>
    );
  }
  if (emailCreateUser) {
    navigate(from, {replace: true});
  }

  return (
    <div className="min-h-[90vh] py-10">
      <div className="max-w-sm mx-auto text-center">
        <h3 className="text-3xl font-bold text-accent">Create an Account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">What's your Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: true,
                minLength: 6,
              })}
              placeholder="Type here"
              class="input input-bordered w-full"
            />
            {errors.name?.type === "required" && (
              <label class="label">
                <span class="label-text-alt">Name is Required</span>
              </label>
            )}

            {errors.name?.type === "minLength" && (
              <label className="label">
                <span class="label-text-alt">
                  Name should be of atleast 6 character
                </span>
              </label>
            )}
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Enter Email Address</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
              placeholder="Type here"
              class="input input-bordered w-full"
            />
            {errors.email?.type === "required" && (
              <label class="label">
                <span class="label-text-alt">Email is Required</span>
              </label>
            )}

            {errors.email?.type === "pattern" && (
              <label className="label">
                <span class="label-text-alt">
                  Please enter a correct email address
                </span>
              </label>
            )}
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Enter Your Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
              placeholder="Type here"
              class="input input-bordered w-full"
            />
            {errors.password?.type === "required" && (
              <label class="label">
                <span class="label-text-alt">Password is Required</span>
              </label>
            )}
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-primary w-full mt-4"
          />
        </form>
        {errorElement}
      </div>
    </div>
  );
};

export default Signup;
