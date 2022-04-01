import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      <Wrapper>
        <Items>
          {popularProducts.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </Items>
      </Wrapper>
    </Container>
  );
};

export default Products;
