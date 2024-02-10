import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { products } from "../Constant/ProductArr";

// This is Productlist page for show all product
function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card>
              <Card.Img
                style={{ height: "325px" }}
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
