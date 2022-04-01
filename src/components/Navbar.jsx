import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../responsive";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: #f4f7f6;

  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  color: #9b479d;

  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid #9b479d;
  background-color: #f4f7f6;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: #f4f7f6;

  ${mobile({ width: "35px", height: "10px" })};
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #9b479d;
  text-align: center;

  ${mobile({ fontSize: "16px", marginLeft: "5px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: "2", justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: #9b479d;

  ${mobile({ fontSize: "10px", marginLeft: "10px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "#9b479d", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>CTTNCANDY.</Logo>
        </Center>
        <Right>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>
            <Badge badgeContent={999} color="primary">
              <ShoppingCartOutlined style={{ color: "#9b479d" }} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
