import "./App.css";
import { useState, useEffect } from "react";
import productsWithoutPrices from "./productsWithoutPrices.js";
import ProductCard from "./components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://api.decisionrules.io/rule/solve/73d006b1-3336-ac0b-0bb8-d83fb7977fa7";
    const obj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify({ data: productsWithoutPrices }),
    };

    fetch(url, obj)
      .then((res) => res.json())
      .then((res) => {
        // get prices into array
        const prices = res.map((item) => {
          return item[0].price;
        });
        // make a copy of products without prices
        const productsDuplicate = productsWithoutPrices.map((item) => ({
          ...item,
        }));
        // add prices to the objects
        for (let i = 0; i < productsDuplicate.length; i++) {
          productsDuplicate[i].price = prices[i];
        }
        // set products with all the info needed
        setProducts(productsDuplicate);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {isLoading && (
        <Spinner
          animation="border"
          role="status"
          className="position-absolute top-50 start-50 translate-middle"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!isLoading && (
        <>
          <ToggleSwitch
            billingPeriod={billingPeriod}
            setter={setBillingPeriod}
          />
          <div className="h-100 d-lg-flex align-items-center products-container">
            {products
              .filter((product) => {
                return product.billingPeriod === billingPeriod;
              })
              .map((product) => {
                return <ProductCard product={product} key={product.id} />;
              })}
          </div>
        </>
      )}
    </>
  );
}

export default App;
