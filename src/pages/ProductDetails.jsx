import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetails() {
  let { name } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    let productservice = new ProductService();
    productservice
      .getByProductName(name)
      .then((result) => {
        setProduct(result.data.data);
      })
  }, []);

  return (
    <div>
      {product.productName}
      {console.log(product)}
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.quantityPerUnit}</Card.Meta>
            <Card.Description>
              <strong>{product.productName}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
