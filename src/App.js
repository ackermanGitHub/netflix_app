import React from "react";
import jumboData from './fixtures/jumbo'
import Jumbotron from "./components/jumbotron";

export default function App() {
  return (
    <Jumbotron.Container>
      {
        jumboData.map((items) => (
          <Jumbotron key={items.id} direction={items.direction}>
            <p>{items.title}</p>
            <p>{items.subtitle}</p>
            <p>{items.image}</p>
            <p>{items.alt}</p>
          </Jumbotron>
        ))}
    </Jumbotron.Container>
  );
}
