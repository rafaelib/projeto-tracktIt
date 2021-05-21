import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import axios from "axios";

const Register = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);

  const [body, setBody] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  function signUp() {
    console.log(body);
    setLoading(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      body
    );
    promise.then(() => {
      console.log("sucesso");
      history.push("/");
    });
    promise.catch(() => {
      alert("Algo deu errado. Tente novamente");
      setLoading(false);
    });
  }

  return (
    <Container>
      <img src="logo.png" alt="aaaa" />
      <ContainerInputs>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setBody({ ...body, email: e.target.value })}
          value={body.email}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setBody({ ...body, password: e.target.value })}
          value={body.password}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="nome"
          onChange={(e) => setBody({ ...body, name: e.target.value })}
          value={body.name}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="foto"
          onChange={(e) => setBody({ ...body, image: e.target.value })}
          value={body.image}
          disabled={loading}
        />
        <button onClick={signUp} disabled={loading}>
          {loading ? (
            <Loader type="ThreeDots" color="#FFFFFF" height={60} width={60} />
          ) : (
            "Cadastrar"
          )}
        </button>
      </ContainerInputs>
      <Link to="/">
        <span>Já tem uma conta? Faça login!</span>
      </Link>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  font-family: "Lexend Deca", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
  height: auto;

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
