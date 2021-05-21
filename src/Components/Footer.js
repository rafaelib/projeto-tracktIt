import React, { useContext } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import ProgressBar from "../Components/contexts/ProgressBar";

const Footer = () => {
  const { progressBar } = useContext(ProgressBar);

  return (
    <Container>
      <Link to="/habitos">
        <span>Hábitos</span>
      </Link>
      <Link to="/hoje">
        <div>
          <CircularProgressbar
            background
            value={progressBar}
            text="Hoje"
            styles={buildStyles({
              textColor: "#ffffff",
              pathColor: "#ffffff",
              trailColor: "#52B6FF",
              backgroundColor: "#52B6FF",
            })}
          />
        </div>
      </Link>
      <Link to="/historico">
        <span>Histórico</span>
      </Link>
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
  padding-right: 7.5%;
  padding-left: 7.5%;
  width: 100%;
  height: 70px;

  span {
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }

  div {
    height: 91px;
    width: 91px;
    margin-bottom: 48px;
  }
`;
