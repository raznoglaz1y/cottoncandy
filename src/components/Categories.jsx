import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  margin-top: -150px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  padding: 20px;
  margin-left: 20px;
`;

const Items = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Categories</Title>
        <Items>
          {categories.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </Items>
      </Wrapper>
    </Container>
  );
};

export default Categories;
