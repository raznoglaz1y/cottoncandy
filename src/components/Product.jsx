import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 250px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f4f7f6;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 150;
  height: 150;
  border-radius: 50%;
  background-color: #f4f7f6;
  position: absolute;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  background-color: #f4f7f6;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f4f7f6;
  color: #9b479d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #9b479d;
    transform: scale(1.1);
    color: #f4f7f6;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
