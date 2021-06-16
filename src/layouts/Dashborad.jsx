import React from "react";
import Navi from "./Navi";
import Cartsummary from "./Cartsummary";
import Categories from "./Categories";
import productList from "../pages/productList.jsx";

export default function Dashborad() {
  return (
    <div>
      <Navi>
        <Cartsummary></Cartsummary>
      </Navi>
      <Categories></Categories>
      <productList></productList>
    </div>
  );
}
