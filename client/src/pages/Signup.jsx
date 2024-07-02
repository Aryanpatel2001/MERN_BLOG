import React, { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formdata, setFormdata] = useState({});
  const [errorMessage, setErrormessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.password) {
      return setErrormessage("Please fill out all field ");
    }
    try {
      setLoading(true);
      setErrormessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrormessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/signin");
      }
    } catch (error) {
      setErrormessage(error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-screen mt-20 max-w-2xl mx-auto ">
        <h1 className=" text-3xl text-center mb-5">SignUp</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="">
            <Label value="Your Username"></Label>
            <TextInput
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
            ></TextInput>
          </div>
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
              placeholder="password"
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
              "Sign Up"
            )}
          </Button>
        </form>
        <div className=" flex gap-2 text-sm mt-5">
          <span>Have an account ?</span>
          <Link to="/signin" className="text-blue-500">
            Sign In
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
