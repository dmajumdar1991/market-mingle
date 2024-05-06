import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/data/MyContext";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);

    if (email === "" || password === "") {
      return toast.error("All fields are required");
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
      toast.success("Login Successfull", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      navigate("/");

      setLoading(false);
    } catch (error) {
      toast.error("Login Failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {loading && <Loader />}
      <div className="rounded-xl bg-gray-800 px-10 py-10">
        <div>
          <h1 className="mb-4 text-center text-xl font-bold text-white">
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
            placeholder="Login"
          />
        </div>
        <div>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
            placeholder="Password"
          />
        </div>
        <div className="mb-3 flex justify-center" onClick={login}>
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
