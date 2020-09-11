import React from "react";
import DrinkList from "./DrinkList";

import Container from "react-bootstrap/Container";

function DrinkControl() {

  const body = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderLeft: "solid",
    borderRight: "solid",
    borderBottom: "solid",
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "lightgray",
    padding: 10,
  }
    return (
      <Container fluid style={body}>
        <DrinkList />
      </Container>
    );  
}

export default DrinkControl;