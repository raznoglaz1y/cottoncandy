import {
  Facebook,
  Instagram,
  MailOutlined,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color: #9b479d;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ display: "none" })};
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: #f4f7f6;
  background-color: #${(props) => props.color};
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ backgroundColor: "#f4f7f6" })};
`;

const ContactsItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>COTTONCANDY.</Logo>
        <Description>
          It’s important for us to promote a healthy body image – we’re not
          about conforming to any stereotypes – so we work with more than 200
          models to represent our audience.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Whishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactsItem>
          <Room style={{ marginRight: "10px" }} />
          622 Dixie Path, South Tobinchester 99823
        </ContactsItem>
        <ContactsItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 234 56 78 96
        </ContactsItem>
        <ContactsItem>
          <MailOutlined style={{ marginRight: "10px" }} />
          info@cottoncandy.dev
        </ContactsItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
