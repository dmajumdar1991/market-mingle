import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";

const MyState = (props) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#111827";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
    }
  };

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    title: "",
    price: "",
    imgUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  /***************** Add Product Section ***************/

  const addProduct = async () => {
    if (
      products.title === "" ||
      products.price === "" ||
      products.imgUrl === "" ||
      products.category === "" ||
      products.description === ""
    ) {
      return toast.error("All fields are require");
    }

    setLoading(true);

    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);

      toast.success("Add Product Successfully");

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);

      getProductData();

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [product, setProduct] = useState([]);

  /***************** Get Product Section ***************/

  const getProductData = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        const productArray = [];

        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });

        setProduct(productArray);
        setLoading(false);
      });

      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
  }, []);

  // update product section

  const editHandle = (item) => {
    setProducts(item);
  };

  const updateProduct = async () => {
    setLoading(true);

    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated Successfully");

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);

      getProductData();

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // product delete section

  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted successfully");
      setLoading(false);
      getProductData();
    } catch (error) {
      setLoading(false);
    }
  };

  // get order section

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true);

    try {
      const result = await getDocs(collection(fireDB, "orders"));
      const ordersArray = [];

      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false);
      });
      setOrder(ordersArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // get user section

  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    setLoading(true);

    try {
      const result = await getDocs(collection(fireDB, "users"));
      const usersArray = [];

      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false);
      });

      setUsers(usersArray);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter section

  const [searchKey, setSearchKey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  // shipping charge

  const shippingCharge = 1000;

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
        editHandle,
        updateProduct,
        deleteProduct,
        order,
        users,
        searchKey,
        setSearchKey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
        shippingCharge,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
