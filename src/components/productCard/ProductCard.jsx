import { useContext, useEffect } from "react";
import MyContext from "../../context/data/MyContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const ProductCard = () => {
  const context = useContext(MyContext);

  const { mode, product, searchKey, filterType, filterPrice } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // add to cart
  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Add to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-8 md:py-16">
        <div className="mb-6 w-full lg:mb-10 lg:w-1/2">
          <h1
            className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 rounded bg-pink-600"></div>
        </div>

        <div className="-m-4 flex flex-wrap">
          {product
            .filter((obj) => obj.title.toLowerCase().includes(searchKey))
            .filter((obj) => obj.category.includes(filterType))
            .filter((obj) => obj.price.includes(filterPrice))
            .map((item, index) => {
              const { title, imgUrl, price } = item;
              return (
                <div
                  onClick={() =>
                    (window.location.href = `/productinfo/${item.id}`)
                  }
                  key={index}
                  className="p-4 drop-shadow-lg  md:w-1/4 "
                >
                  <div
                    className="h-full overflow-hidden rounded-2xl border-2 border-gray-200 border-opacity-60 transition-shadow    duration-300 ease-in-out hover:shadow-2xl hover:shadow-gray-100"
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <div className="flex cursor-pointer justify-center">
                      <img
                        className=" transition-scale-110 h-52 w-full rounded-2xl p-2 duration-300  ease-in-out hover:scale-110"
                        src={imgUrl}
                        alt="blog"
                      />
                    </div>
                    <div className="border-t-2 p-5">
                      <h2
                        className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Market Mingle
                      </h2>
                      <h1
                        className="title-font mb-3 text-lg font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {title}
                      </h1>
                      {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                      <p
                        className="mb-3 leading-relaxed"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        ₹ {price}
                      </p>
                      <div className=" flex justify-center">
                        <button
                          type="button"
                          className="w-full rounded-lg bg-pink-600 py-2 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-4  focus:ring-purple-300"
                          onClick={() => addCart(item)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
