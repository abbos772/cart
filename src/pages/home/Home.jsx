import React, { useEffect, useState } from "react";
import Main from "../../components/main/Main";
import Products from "../../components/products/Products";
import axios from "../../api";

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Main />
      <Products data={products} />
    </div>
  );
};

export default Home;
