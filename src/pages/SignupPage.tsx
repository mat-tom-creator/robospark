import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Input from "../components/common/Input";
import useForm from "../hooks/useForm";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordConfirmation,
} from "../utils/validators";

const SignupPage: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationRules = {
    name: validateName,
    email: validateEmail,
    password: validatePassword,
    passwordConfirmation: validatePasswordConfirmation,
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validationRules,
    onSubmit
  );

  function onSubmit(formValues: typeof initialValues) {
    // This would connect to the backend API in Phase 3
    console.log("Signup form submitted:", formValues);
  }

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Start your robotics journey with RoboSpark"
    >
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Input
          type="text"
          name="name"
          id="name"
          label="Full Name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          required
        />

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

        <Input
          type="password"
          name="passwordConfirmation"
          id="passwordConfirmation"
          label="Confirm Password"
          value={values.passwordConfirmation}
          onChange={handleChange}
          error={errors.passwordConfirmation}
          required
        />

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
            I agree to the{" "}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Create Account
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:underline font-medium"
            >
              Log in
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
                Or sign up with
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

export default SignupPage;
