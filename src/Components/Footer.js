import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <span>Hábitos</span>
      <span>Histórico</span>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  position: fixed;
  font-family: "Lexend Deca", sans-serif;
  bottom: 0;
  left: 0;
  padding-right: 10px;
  padding-left: 10px;

  span {
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
`;
