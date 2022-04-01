import React from "react";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #89829f;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  color: #f4f7f6;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 24px;
  color: #f4f7f6;
  font-weight: 300;
  margin-bottom: 20px;

  ${mobile({ textAlign: "center" })};
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #f4f7f6;
  display: flex;
  justify-content: space-between;
  border: 1px solid #f4f7f6;

  ${mobile({ width: "80%" })};
`;

const Input = styled.input`
  border: none;
  flex: 8;
  background-color: #f4f7f6;
  padding-left: 20px;
  font-size: 16px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #ac4157;
  color: #f4f7f6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Stay in touch! Get timely updates for you favourite products!
      </Description>
      <InputContainer>
        <Input placeholder="Type your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
