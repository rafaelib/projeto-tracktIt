import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <img src="logo.png" alt="aaaa" />
      <ContainerInputs>
        <input type="text" placeholder="teste@teste.com" />
        <input type="text" placeholder="••••••" />
        <button disabled>Entrar</button>
      </ContainerInputs>
      <span>Não tem uma conta? Cadastre-se!</span>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  font-family: "Lexend Deca", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 45%;
    margin-top: 70px;
    margin-bottom: 38px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-align: center;
    color: #52b6ff;
  }
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-bottom: 25px;

  button,
  input {
    height: 45px;
    border-radius: 5px;
    outline: none;
  }

  input {
    border: 1px solid #d4d4d4;
    background: #f2f2f2;
    margin-bottom: 8px;
  }

  input::placeholder {
    padding-left: 11px;
    color: #afafaf;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
  }

  button {
    background: #52b6ff;
    border: none;
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }
`;
