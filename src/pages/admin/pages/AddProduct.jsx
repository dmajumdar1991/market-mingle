const AddProduct = () => {
  return (
    <div>
      <div className=" flex h-screen items-center justify-center">
        <div className=" rounded-xl bg-gray-800 px-10 py-10 ">
          <div className="">
            <h1 className="mb-4 text-center text-xl font-bold text-white">
              Add Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="title"
              className=" mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              className=" mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              name="imageurl"
              className=" mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              className=" mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="6"
              name="title"
              className=" mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
              placeholder="Product title"
            ></textarea>
          </div>
          <div className=" mb-3 flex justify-center">
            <button className=" w-full rounded-lg bg-yellow-500 px-2  py-2 font-bold text-black">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
