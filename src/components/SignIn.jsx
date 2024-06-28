import React, { useState } from "react";
import Button from "./Button";

const SignIn = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg relative w-full max-w-md">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-black hover:text-gray-500 text-2xl">
          &times;
        </button>
        <h2 className="text-2xl mb-4 font-semibold">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              className="border border-gray-400 p-2 w-full rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Password</label>
            <input
              type="password"
              className="border border-gray-400 p-2 w-full rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <Button
            type="submit"
            className="bg-blue-500 text-white p-2 w-full  font-semibold">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
