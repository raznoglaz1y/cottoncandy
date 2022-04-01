import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  ${mobile({ padding: "15px" })};
`;

const TopButton = styled.button`
  padding: 10px;
  font-size: 20px;
  border: 0.5px solid
    ${(props) => (props.type === "filled" ? "#f5f3f5" : "#9b479d")};
  background-color: ${(props) =>
    props.type === "filled" ? "#9b479d" : "#f5f3f5"};
  color: ${(props) => (props.type === "filled" ? "#f5f3f5" : "#9b479d")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.type === "filled" ? "#f5f3f5" : "#9b479d"};
    color: ${(props) => (props.type === "filled" ? "#9b479d" : "#f5f3f5")};
    border: 0.5px solid
      ${(props) => (props.type === "filled" ? "#9b479d" : "#f5f3f5")};
  }

  ${mobile({ fontSize: "16px", padding: "5px" })};
`;

const TopTextContainer = styled.div`
  ${mobile({ display: "none" })};
`;

const TopText = styled.span`
  margin: 0 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.div``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  ${mobile({ marginBottom: "5px" })};
`;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-bottom: 20px;

  ${mobile({ marginTop: "30px" })};
`;

const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 30px;
  margin: 0px 5px;
  border: 1px solid #9b479d;

  ${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.span`
  font-size: 20px;
  font-weight: 300;

  ${mobile({ marginBottom: "20px" })};
`;

const Hr = styled.hr`
  background-color: #9b479d;
  border: none;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid #9b479d;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 0.5px solid #9b479d;
  background-color: #f5f3f5;
  color: #9b479d;
  cursor: pointer;

  &:hover {
    background-color: #9b479d;
    color: #f5f3f5;
    border: 0.5px solid #9b479d;
  }
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTextContainer>
            <TopText>CART (2)</TopText>
            <TopText>WHISHLIST (2)</TopText>
          </TopTextContainer>
          <TopButton type="filled">GO TO CHECKOUT</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://a.lmcdn.ru/product/R/T/RTLABG188601_16803111_1_v1_2x.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> THUNDER COAT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 123866638
                  </ProductId>
                  <ProductColor color="green" />
                  <ProductSize>
                    <b>Size:</b> XL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Remove />
                  <Amount>1</Amount>
                  <Add />
                </AmountContainer>
                <ProductPrice>$ 60</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://a.lmcdn.ru/product/R/T/RTLABD400301_16544852_1_v1_2x.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JANE TOP
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 123889838
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Remove />
                  <Amount>1</Amount>
                  <Add />
                </AmountContainer>
                <ProductPrice>$ 25</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemPrice>$ 85</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping:</SummaryItemText>
              <SummaryItemPrice>$ 9.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount:</SummaryItemText>
              <SummaryItemPrice>$ -9.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemPrice>$ 85</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
