import React from "react";
import Cartsummary from "./Cartsummary";
import { Menu, Container } from "semantic-ui-react";
import Signout from "./Signout";
import Singin from "./Singin";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {
  const [isAutenticated, setisAutenticated] = useState(true)
  const { cartItems } = useSelector((state) => state.cart);

  let history=useHistory()

  function handleSignOut(params) {
    setisAutenticated(false)
    history.push("/")
  }

  function hanndleSingIn(params){
    setisAutenticated(true)
  }
  return (
    <div>
      <Menu size="small" inverted style={{padding:'3px'}}>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length>0&&<Cartsummary></Cartsummary>}
              {isAutenticated?<Singin signout={handleSignOut} bisey={"1"}></Singin>:
              <Signout signin={hanndleSingIn}></Signout>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
