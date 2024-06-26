import { useContext } from "react";
import MyContext from "../../context/data/MyContext";

function Filter() {
  const context = useContext(MyContext);
  const {
    mode,
    searchKey,
    setSearchKey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    product,
  } = context;

  return (
    <div>
      <div className=" container mx-auto mt-5 px-4 ">
        <div
          className="rounded-lg border border-gray-200 bg-gray-100 p-5 drop-shadow-xl"
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="relative">
            <div className="absolute ml-2 flex h-full items-center">
              <svg
                className="text-primary-gray-dark h-4 w-4 fill-current"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
              name="searchkey"
              id="searchkey"
              placeholder="Search here"
              className="bg-violet-0 w-full rounded-md border-transparent px-8 py-3 text-sm outline-0"
              style={{
                backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="font-medium">Filters</p>
            <button
              className="bg-gray-50hover:bg-gray-200 rounded-md px-4 py-2 text-sm font-medium text-gray-800"
              style={{ color: mode === "dark" ? "white" : "" }}
              onClick={() => setSearchKey("")}
            >
              Reset Filter
            </button>
          </div>
          <div>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full rounded-md border-transparent bg-gray-50 px-4 py-3 text-sm outline-0 focus:border-gray-500 focus:bg-white focus:ring-0"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                {product.map((item, index) => (
                  <option key={index} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </select>
              <select
                value={filterPrice}
                onChange={(e) => setFilterPrice(e.target.value)}
                className="w-full rounded-md border-transparent bg-gray-50 px-4 py-3 text-sm  outline-0 focus:border-gray-500 focus:bg-white focus:ring-0"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                {product.map((item, index) => (
                  <option key={index} value={item.price}>
                    {item.price}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
