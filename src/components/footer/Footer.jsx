import { useContext } from "react";
import MyContext from "../../context/data/MyContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const context = useContext(MyContext);

  const { mode } = context;

  return (
    <footer
      className="body-font bg-gray-300 text-gray-600"
      style={{
        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <div className="container mx-auto px-5 py-24">
        <div className="order-first flex flex-wrap text-center md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2
              className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/order"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  to={"/cart"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Cart
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2
              className="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Customer Service
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link
                  to={"#"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Contact Us
                </Link>
              </li>
            </nav>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2
              className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Services
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link
                  to={"#"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Privacy
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
          </div>
        </div>
      </div>

      <div
        className="bg-gray-200"
        style={{
          backgroundColor: mode === "dark" ? "rgb(55 57 61)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div className="container mx-auto flex flex-col items-center px-5 py-3 sm:flex-row">
          <Link to={"/"} className="flex">
            <div className="flex ">
              <h1
                className=" rounded px-2 py-1  text-2xl font-bold text-black"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Market Mingle
              </h1>
            </div>
          </Link>
          <p
            className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            © {new Date().getFullYear()} Market Mingle —
            <a
              href="https://market-mingle.vercel.com"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
              target="_blank"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              www.market-mingle.vercel.com
            </a>
          </p>
          <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-blue-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="bi bi-twitter-x h-5 w-5"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-blue-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
