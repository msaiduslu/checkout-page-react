import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import AddProduct from "./components/AddProduct";
import axios from "axios";
import CardTotal from "./components/CardTotal";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [newamount, setNewamount] = useState({});
  const setToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const updateAmount = (productNewAmount) => {
    return setNewamount({
      id: data.id,
      name: data.name,
      amount: productNewAmount,
    });
  };

  const getProductsData = async () => {
    const BASE_URL = "https://63fa0463beec322c57ebec41.mockapi.io/products";
    try {
      const response = await axios(BASE_URL);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <Header />
      {show ? (
        <AddProduct setToggle={setToggle} show={show} />
      ) : (
        <Button setToggle={setToggle} show={show} />
      )}
      <CardTotal data={data} getProductsData={getProductsData} />
    </div>
  );
}

export default App;
