import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Input from "../components/common/Input";
import useForm from "../hooks/useForm";
import { validateEmail, validateRequired } from "../utils/validators";

const LoginPage: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationRules = {
    email: validateEmail,
    password: (value: string) => validateRequired(value, "Password"),
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validationRules,
    onSubmit
  );

  function onSubmit(formValues: typeof initialValues) {
    // This would connect to the backend API in Phase 3
    console.log("Login form submitted:", formValues);
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Log in to access your RoboSpark account"
    >
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Input
          type="email"
          name="email"
          id="email"
          label="Email Address"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <div>
          <Input
            type="password"
            name="password"
            id="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            required
          />
          <div className="text-right mt-1">
            <a
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Log In
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
            >
              <img
                src="/assets/icons/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Google
            </button>
            <button
              type="button"
              className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
            >
              <img
                src="/assets/icons/apple.svg"
                alt="Apple"
                className="w-5 h-5 mr-2"
              />
              Apple
            </button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
