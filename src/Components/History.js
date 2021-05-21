import styled from "styled-components";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const History = () => {
  return (
    <Container>
      <Header />
      <Title>
        <h1>Histórico</h1>
      </Title>
      <Description>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
      </Description>
      <Footer />
    </Container>
  );
};

export default History;

const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
  font-family: "Lexend Deca", sans-serif;
`;
const Title = styled.div`
  display: flex;
  padding-left: 7.5%;
  padding-right: 7.5%;
  padding-top: 100px;
  justify-content: space-between;
  h1 {
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    color: #126ba5;
  }
`;
const Description = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  padding-left: 7.5%;
  padding-right: 7.5%;
  color: #666666;
  margin-top: 30px;
`;
