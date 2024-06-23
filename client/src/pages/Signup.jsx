import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <>
      <div className="min-h-screen mt-20 max-w-2xl mx-auto ">
        <h1 className=" text-3xl text-center mb-5">SignUp</h1>
        <form className="flex flex-col gap-4">
          <div className="">
            <Label value="Your Username"></Label>
            <TextInput
              type="text"
              placeholder="username"
              id="username"
            ></TextInput>
          </div>
          <div className="">
            <Label value="Your email"></Label>
            <TextInput
              type="text"
              placeholder="name@gmail.com"
              id="email"
            ></TextInput>
          </div>{" "}
          <div className="">
            <Label value="Your password"></Label>
            <TextInput
              type="text"
              placeholder="password"
              id="password"
            ></TextInput>
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
        <div className=" flex gap-2 text-sm mt-5">
          <span>Have an account ?</span>
          <Link to="/sign-in" className="text-blue-500">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}
