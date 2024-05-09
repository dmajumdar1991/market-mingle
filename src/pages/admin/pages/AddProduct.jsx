import { useContext } from "react";
import MyContext from "../../../context/data/MyContext";

const AddProduct = () => {
  const context = useContext(MyContext);

  const { products, setProducts, addProduct } = context;

  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" rounded-xl bg-gray-800 px-10 py-10 ">
        <div>
          <h1 className="mb-4 text-center text-xl font-bold text-white">
            Add Product
          </h1>
        </div>
        <div>
          <input
            type="text"
            value={products.title}
            onChange={(e) =>
              setProducts({ ...products, title: e.target.value })
            }
            name="title"
            className=" mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
            placeholder="Product title"
          />
        </div>
        <div>
          <input
            type="text"
            value={products.price}
            onChange={(e) =>
              setProducts({ ...products, price: e.target.value })
            }
            name="price"
            className=" mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
            placeholder="Product price"
          />
        </div>
        <div>
          <input
            type="text"
            value={products.imgUrl}
            onChange={(e) =>
              setProducts({ ...products, imgUrl: e.target.value })
            }
            name="imageurl"
            className=" mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
            placeholder="Product imageUrl"
          />
        </div>
        <div>
          <input
            type="text"
            value={products.category}
            onChange={(e) =>
              setProducts({ ...products, category: e.target.value })
            }
            name="category"
            className=" mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
            placeholder="Product category"
          />
        </div>
        <div>
          <textarea
            value={products.description}
            onChange={(e) =>
              setProducts({ ...products, description: e.target.value })
            }
            cols="30"
            rows="6"
            name="description"
            className=" mb-4 w-full rounded-lg bg-gray-600 px-2 py-2 text-white outline-none placeholder:text-gray-200 lg:w-[20em]"
            placeholder="Product description"
          ></textarea>
        </div>
        <div className=" mb-3 flex justify-center">
          <button
            className=" w-full rounded-lg bg-yellow-500 px-2  py-2 font-bold text-black"
            onClick={addProduct}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
