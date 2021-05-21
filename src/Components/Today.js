import React from "react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../Components/contexts/UserContext";
import Header from "./Header";
import Footer from "./Footer";
import { CheckmarkOutline } from "react-ionicons";
import dayjs from "dayjs";

const Today = () => {
  const { user } = useContext(UserContext);
  const token = user === null ? "" : user.token;
  const [habitsArray, setHabitsArray] = useState([]);
  const [selectedHabitsArray, setSelectedHabitsArray] = useState([]);
  const today = dayjs(new Date()).format("DD/MM");
  const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const currentWeekday = weekdays[dayjs(new Date()).day()];

  function selectHabit(habit) {
    if (habit.done === true) {
      habit.done = false;
      setSelectedHabitsArray(habitsArray.filter((i) => i.done === true));
    } else {
      habit.done = true;
      setSelectedHabitsArray(habitsArray.filter((i) => i.done === true));
    }
  }

  useEffect(() => {
    if (token !== "") {
      const promise = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      promise.then((response) => {
        setHabitsArray(response.data);
      });

      promise.catch(() => {
        alert("Algo deu errado. Tente novamente");
      });
    }
  }, [user]);

  return (
    <Container>
      <Header />
      <Title>
        <h1
          onClick={() => {
            console.log(habitsArray);
            console.log(selectedHabitsArray);
          }}
        >
          {currentWeekday}, {today}
        </h1>
        <span>Nenhum hábito concluído ainda</span>
        <HabitsContainer>
          {habitsArray.map((i, index) => (
            <Habits key={index}>
              <h4>{i.name}</h4>
              <span>{`Sequencia Atual: ${i.currentSequence} Dias`}</span>
              <span>{`Maior Sequencia: ${i.highestSequence} Dias`}</span>
              <CheckContainer
                onClick={() => {
                  selectHabit(i);
                }}
                selected={selectedHabitsArray.includes(i)}
              >
                <CheckmarkOutline
                  color={"#FFFFFF"}
                  height="50px"
                  width="50px"
                />
              </CheckContainer>
            </Habits>
          ))}
        </HabitsContainer>
      </Title>
      <Footer />
    </Container>
  );
};

export default Today;

const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
  font-family: "Lexend Deca", sans-serif;
`;

const Title = styled.div`
  padding-left: 7.5%;
  padding-right: 7.5%;
  padding-top: 100px;

  h1 {
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    color: #126ba5;
  }
  & > span {
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #bababa;
  }
`;

const HabitsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Habits = styled.div`
  position: relative;
  padding-left: 7.5%;
  display: flex;
  flex-direction: column;
  height: 94px;
  width: 85%;
  border-radius: 5px;
  background: #ffffff;
  margin-bottom: 20px;
  h4 {
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #666666;
    margin-bottom: 15px;
    padding-top: 10px;
  }
  p {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    color: #666666;
  }
`;
const CheckContainer = styled.div`
  position: absolute;
  top: 13px;
  right: 13px;
  display: flex;
  width: 69px;
  height: 69px;
  justify-content: center;
  align-items: center;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  background: gray;
`;
