import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import AddProduct from "./components/AddProduct";
import axios from "axios";
import CardTotal from "./components/CardTotal";

function App() {
  const [show, setShow] = useState(false);
  const [productById, setProductById] = useState({});

  const setToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    const BASE_URL = "https://63fa0463beec322c57ebec41.mockapi.io/products";
    try {
      const response = await axios(BASE_URL);
      const productMap = response.data.reduce((acc, item) => {
        return {
          ...acc,
          [item.id]: item,
        };
      }, {});
      setProductById(productMap);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChangeProduct = async (id, productChangeEvent) => {
    const BASE_URL = `https://63fa0463beec322c57ebec41.mockapi.io/products/${id}`;
    const updatedProduct = {
      ...productById[id],
      ...productChangeEvent,
    };
    // setProductById({
    //   ...productById,
    //   [id]: updatedProduct,
    // });
    await axios.put(BASE_URL, updatedProduct);
    await getProductsData();
  };
  const handleOnProductRemove = async (id) => {
    const BASE_URL = `https://63fa0463beec322c57ebec41.mockapi.io/products/${id}`;
    const newProductById = { ...productById };
    delete newProductById[id];
    setProductById(newProductById);
    await axios.delete(BASE_URL);
    await getProductsData();
  };
  const handleOnAddProduct = async (newProduct) => {
    const BASE_URL = "https://63fa0463beec322c57ebec41.mockapi.io/products";
    await axios.post(BASE_URL, newProduct);
    await getProductsData();
  };

  return (
    <div className="App">
      <Header />
      <div className={show ? "main-container-column" : "main-container-row"}>
        <div className={show ? "addproduct-component" : null}>
          <Button setToggle={setToggle} show={show} />
          {show ? (
            <AddProduct
              setToggle={setToggle}
              show={show}
              onAddProduct={handleOnAddProduct}
            />
          ) : null}
        </div>
        <CardTotal
          productById={productById}
          onChangeProduct={handleOnChangeProduct}
          onProductRemove={handleOnProductRemove}
        />
      </div>
    </div>
  );
}

export default App;
