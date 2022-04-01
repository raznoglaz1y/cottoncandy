import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://a.lmcdn.ru/bs2/3/21/w_hp_1_preppy-style.jpg") center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #f5f3f5;

  ${mobile({ width: "70%" })};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #9b479d;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 0.5px solid #9b479d;
  color: #9b479d;
`;

const Button = styled.button`
  width: 40%;
  padding: 10px;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 14px;
  border: 0.5px solid #9b479d;
  background-color: #f5f3f5;
  color: #9b479d;
  cursor: pointer;

  &:hover {
    background-color: #9b479d;
    color: #f5f3f5;
  }

  ${mobile({ width: "60%" })};
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 14px;
  font-weight: 300;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="Email" type={"email"} />
          <Input placeholder="Password" type={"password"} />
          <Button>START SHOPPING</Button>
          <Link>Forgot your password?</Link>
          <Link>Create new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
