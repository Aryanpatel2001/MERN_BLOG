import React, { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/User/userSlice";

export default function SignIn() {
  const [formdata, setFormdata] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.email || !formdata.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch.signInSuccess(data.message);
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <>
      <div className="min-h-screen mt-20 max-w-2xl mx-auto ">
        <h1 className=" text-3xl text-center mb-5">SignUp</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="">
            <Label value="Your email"></Label>
            <TextInput
              type="email"
              placeholder="name@gmail.com"
              id="email"
              onChange={handleChange}
            ></TextInput>
          </div>{" "}
          <div className="">
            <Label value="Your password"></Label>
            <TextInput
              type="password"
              placeholder="***********"
              id="password"
              onChange={handleChange}
            ></TextInput>
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <Spinner size="sm">
                <span className="pl-3">Loading...</span>
              </Spinner>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
        <div className=" flex gap-2 text-sm mt-5">
          <span>Don't Have an account ?</span>
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </div>
        {errorMessage && (
          <Alert className="mt-5" color="failure">
            {errorMessage}
          </Alert>
        )}
      </div>
    </>
  );
}
