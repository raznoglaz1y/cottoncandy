import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({ height: "30vh" })};
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #f5f3f5;
  text-shadow: 1px 1px 2px #9b479d;
  margin-bottom: 20px;
  text-align: center;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  border: 0.5px solid #f5f3f5;
  background-color: transparent;
  color: #f5f3f5;
  cursor: pointer;

  &:hover {
    background-color: #9b479d;
    color: #f5f3f5;
	 border: 0.5px solid #f5f3f5;

  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
