import { useContext } from "react";
import Layout from "../../../components/layout/Layout";
import MyContext from "../../../context/data/MyContext";
import { FaUserTie } from "react-icons/fa";
import DashboardTab from "./DashboardTab";

const Dashboard = () => {
  const context = useContext(MyContext);
  const { mode } = context;

  return (
    <Layout>
      <section className="body-font mb-10 mt-10 text-gray-600">
        <div className="container mx-auto mb-10 px-5">
          <div className="-m-4 flex flex-wrap text-center">
            <div className="w-full p-4 sm:w-1/2 md:w-1/4">
              <div
                className=" rounded-xl border-2 border-gray-300 bg-gray-100 px-4    py-3 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] hover:shadow-purple-600"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="mb-3 inline-block h-12 w-12 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font fonts1 text-3xl font-medium text-black"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h2>
                <p
                  className=" font-bold  text-purple-500"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/4">
              <div
                className=" rounded-xl border-2 border-gray-300 bg-gray-100 px-4    py-3 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] hover:shadow-purple-600"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="mb-3 inline-block h-12 w-12 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font fonts1 text-3xl font-medium text-black"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h2>
                <p
                  className=" font-bold  text-purple-500"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Orders
                </p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/4">
              <div
                className=" rounded-xl border-2 border-gray-300 bg-gray-100 px-4    py-3 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] hover:shadow-purple-600"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="mb-3 inline-block h-12 w-12 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font fonts1 text-3xl font-medium text-black"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  20
                </h2>
                <p
                  className=" font-bold  text-purple-500"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Users
                </p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/4">
              <div
                className=" rounded-xl border-2 border-gray-300 bg-gray-100 px-4    py-3 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] hover:shadow-purple-600"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="mb-3 inline-block h-12 w-12 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font fonts1 text-3xl font-medium text-black"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  20
                </h2>
                <p
                  className=" font-bold  text-purple-500"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
};

export default Dashboard;
