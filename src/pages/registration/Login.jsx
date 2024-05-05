import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-xl bg-gray-800 px-10 py-10">
        <div>
          <h1 className="mb-4 text-center text-xl font-bold text-white">
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            id="email"
            className="mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
            placeholder="Login"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            className="mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
            placeholder="Password"
          />
        </div>
        <div className="mb-3 flex justify-center">
          <button className="w-full rounded-lg bg-red-500 px-2 py-2 font-bold text-white">
            Login
          </button>
        </div>
        <div>
          <h2 className="text-center text-white">
            Don't have an account?{" "}
            <Link to={"/signup"} className="font-bold text-red-500">
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;