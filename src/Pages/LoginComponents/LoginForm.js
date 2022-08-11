import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading";
import { Link,useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    emaiUser,
    emailLoading,
    emailError,
  ] = useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let errorElelements;

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };


  useEffect(() => {
    if(googleUser || emaiUser) {
      navigate(from, {replace: true});
    }
  }, [googleUser, emaiUser, navigate, from]);



  if (googleLoading || emailLoading) {
    return <Loading></Loading>
  }
  if (googleError || emailError) {
    errorElelements = <p className="text-red-600 text-xs text-center">{googleError.message || emailError.message}</p>
  }

 

  return (
    <div className="min-h-screen px-8">
      <div className="max-w-sm mx-auto mt-10">
        <div className="py-10">
          <h3 className="text-center text-2xl text-accent font-bold">
            Login To Engineer Station
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            value="Login"
            className="btn btn-primary w-full mt-4"
          />
        </form>
        <div className="py-4">
        <p className="text-center">New To Engineer Station? <Link className="underline text-purple-600" to="/signup">Create an Account</Link> </p>
        </div>
        <div class="divider">OR</div>
        <button onClick={() => signInWithGoogle()} className="btn w-full">Continue With Google</button>
        {
          errorElelements
        }
      </div>
    </div>
  );
};

export default LoginForm;
