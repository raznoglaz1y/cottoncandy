import React from "react";
import styled from "styled-components";

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
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #f5f3f5;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #9b479d;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  border: 0.5px solid #9b479d;
  color: #9b479d;
`;

const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0;
  color: #9b479d;
`;

const Button = styled.button`
  width: 40%;
  padding: 10px;
  font-size: 20px;
  border: 0.5px solid #9b479d;
  background-color: #f5f3f5;
  color: #9b479d;
  cursor: pointer;

  &:hover {
    background-color: #9b479d;
    color: #f5f3f5;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" type={"text"} />
          <Input placeholder="Last Name" type={"text"} />
          <Input placeholder="Username" type={"text"} />
          <Input placeholder="Email" type={"email"} />
          <Input placeholder="Password" type={"password"} />
          <Input placeholder="Confirm password" type={"password"} />
        </Form>
        <Agreement>
          By creating an account I consent to the processing of my personal in
          accordance wit the <b>PRIVACY POLICY</b>.
        </Agreement>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
