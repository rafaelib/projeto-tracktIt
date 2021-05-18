import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <img src="logo.png" alt="aaaa" />
      <input type="text" />
      <ContainerInputs></ContainerInputs>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 45%;
    margin-top: 70px;
    margin-bottom: 38px;
  }
`;

const ContainerInputs = styled.div``;
