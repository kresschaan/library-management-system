"use client";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { useRouter } from "next/navigation";

function FormLogin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [loginErr, setLoginErr] = useState("");
  const [results, setResults] = useState({ isLoading: false });

  const handleAuthenticate = async (data) => {
    try {
      setResults({ isLoading: true });

      const response = await axios.get("http://127.0.0.1:3001/users");
      const users = response.data;

      const user = users.find(
        (u) => u.username === data.username && u.password === data.password,
      );

      if (user) {
        console.log(user);

        set.localStorage("user", user.type);

        reset();
        setLoginErr("");
        router.push("/dashboard");
      } else {
        setLoginErr("Login or password is invalid.");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setLoginErr("An error occurred during authentication.");
    } finally {
      setResults({ isLoading: false });
    }
  };

  return (
    <form
      className="mt-12 overflow-auto rounded-lg bg-white/90 p-16 shadow-md lg:w-8/12 lg:rounded-none lg:p-0 lg:shadow-none"
      action=""
      onSubmit={handleSubmit(handleAuthenticate)}
    >
      <h1 className="login-title font-avernir-heavy">Welcome Back!</h1>
      <div className="group mb-6 flex flex-col">
        <label className="form-login-label" htmlFor="username">
          USERNAME
        </label>
        <input
          id="username"
          className={`form-login-input ${
            errors?.username || results.status === "rejected"
              ? "error"
              : "valid"
          }`}
          type="text"
          autoComplete="on"
          {...register("username", {
            required: true,
          })}
        ></input>
        {errors.username && (
          <p className="form-login-error">Please enter a valid username.</p>
        )}
        {loginErr}
      </div>

      <div className="group mb-6 flex flex-col">
        <label className="form-login-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          id="password"
          className={`form-login-input ${
            errors?.username || results.status === "rejected"
              ? "error"
              : "valid"
          }`}
          type="password"
          autoComplete="on"
          {...register("password", {
            required: true,
          })}
        ></input>
        {errors.password && (
          <p className="form-login-error">Please enter a valid password.</p>
        )}
        {loginErr}
      </div>

      <div className="mb-6 text-sm text-gray-600">
        <p>Demo</p>
        <p>Username: christian</p>
        <p>Password: onelot</p>
      </div>

      <div className="flex flex-col">
        <button className="login-button flex items-center justify-center">
          {results.isLoading ? (
            <ImSpinner3 className="animate-spin text-2xl"></ImSpinner3>
          ) : (
            "Login"
          )}
        </button>

        <div className="forgot-password">
          <p className="pr-1 font-light">Forgot your password?</p>
          <p>Contact Customer Support</p>
        </div>
      </div>
    </form>
  );
}

export default FormLogin;
