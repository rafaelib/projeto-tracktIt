import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "../Components/contexts/UserContext";
import Header from "./Header";
import Footer from "./Footer";

const Habits = () => {
  const [displayDesc, setDisplayDesc] = useState(false);
  const { user, setUser } = useContext(UserContext);
  return (
    <Container>
      <Header />
      <div className="add">
        <span>Meus hábitos</span>
        <button>+</button>
      </div>
      {displayDesc ? (
        <div className="description">
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </div>
      ) : (
        ""
      )}

      <Footer />
    </Container>
  );
};

export default Habits;

const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
  font-family: "Lexend Deca", sans-serif;

  .description {
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    padding-left: 15px;
    padding-right: 15px;
    color: #666666;
    margin-top: 30px;
  }
  .add {
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 100px;
    justify-content: space-between;
    span {
      font-size: 23px;
      font-weight: 400;
      line-height: 29px;
      color: #126ba5;
    }
    button {
      height: 35px;
      width: 40px;
      border-radius: 4.6px;
      background: #52b6ff;
      color: #ffffff;
      border: none;
      outline: none;
      font-size: 32px;
    }
  }
`;
