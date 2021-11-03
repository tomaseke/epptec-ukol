import React from "react";
import Button from "react-bootstrap/Button";
import Features from "./Features";

const ProductCard = ({
  product: { name, price, description, features, billingPeriod },
}) => {
  return (
    <section className="m-4 shadow rounded product-card">
      <h2 className="text-center bg-primary text-white pb-1">{name}</h2>
      <div className="p-2">
        <div className="m-2">{description}</div>
        <Features features={features} />
        <div className="m-2">
          <strong>
            <span className="fs-3">{price}$</span>/mo
          </strong>
        </div>
        <Button className="w-100" variant="outline-primary">
          GET STARTED
        </Button>
      </div>
    </section>
  );
};

export default ProductCard;
