
import React from "react";

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header className="mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="w-28"
        />
      </header>

      <div className="w-full max-w-sm p-8 pb-4 bg-white border border-gray-300 rounded-md shadow-sm">
        <h1 className="mb-4 text-2xl font-semibold">Sign in</h1>

        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email or mobile phone number
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
          >
            Continue
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-600">
          By continuing, you agree to Amazon's{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Notice
          </a>
          .
        </p>

        <div className="mt-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Need help?
          </a>
        </div>
      </div>

      <div className="w-full max-w-md mt-4">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="w-2/5 border-t border-gray-300"></div>
          <span className="text-gray-600">New to Amazon?</span>
          <div className="w-2/5 border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          className="w-full py-2 mt-4 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
        >
          Create your Amazon account
        </button>
      </div>

      <footer className="mt-6 text-xs text-gray-500">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">
            Conditions of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Notice
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
        </div>
        <p className="mt-2">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
}

export default Signup;
