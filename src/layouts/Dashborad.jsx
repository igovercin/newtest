import React from "react";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";

export default function Dashborad() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductDetails} />
            <Route path="/products/:name" component={ProductDetails} />
            <Route path="/cart" component={CartDetail} />
            <Route path="/product/add" component={ProductAdd} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
