import React, { useContext, useEffect, useState } from "react";
import { TrashOutline } from "react-ionicons";
import axios from "axios";
import styled from "styled-components";
import UserContext from "../Components/contexts/UserContext";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "react-loader-spinner";

const Habits = () => {
  const [displayNewHabit, setDisplayNewHabit] = useState(false);
  const { user } = useContext(UserContext);
  const token = user === null ? "" : user.token;
  const [habitsArray, setHabitsArray] = useState([]);
  const [body, setBody] = useState({ name: "", days: [] });
  const [load, setLoad] = useState(false);

  const [weekdays, setWeekdays] = useState([
    { id: 0, character: "D", isSelected: false },
    { id: 1, character: "S", isSelected: false },
    { id: 2, character: "T", isSelected: false },
    { id: 3, character: "Q", isSelected: false },
    { id: 4, character: "Q", isSelected: false },
    { id: 5, character: "S", isSelected: false },
    { id: 6, character: "S", isSelected: false },
  ]);
  function selectDay(day) {
    if (day.isSelected === true) {
      setBody({ ...body, days: [body.days.filter((i) => i.id !== day.id)] });
      day.isSelected = false;
      setWeekdays([...weekdays]);
    } else {
      setBody({ ...body, days: [...body.days, day.id] });
      day.isSelected = true;
      setWeekdays([...weekdays]);
    }
  }

  useEffect(() => {
    if (token !== "") {
      const promise = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      promise.then((response) => {
        console.log(user.token);
        console.log(response.data);
        setHabitsArray(response.data);
      });

      promise.catch((response) => {
        console.log(user.token);
        console.log(response.data);
      });
    }
  }, [user]);

  function loadHabits() {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    promise.then((response) => {
      console.log(user.token);
      console.log(response.data);
      setHabitsArray(response.data);
    });
    promise.catch((response) => {
      console.log(user.token);
      console.log(response.data);
    });
  }

  function sendHabit() {
    setLoad(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      body,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    promise.then((response) => {
      setLoad(false);
      setBody({ name: "", days: [] });
      setWeekdays([
        { id: 0, character: "D", isSelected: false },
        { id: 1, character: "S", isSelected: false },
        { id: 2, character: "T", isSelected: false },
        { id: 3, character: "Q", isSelected: false },
        { id: 4, character: "Q", isSelected: false },
        { id: 5, character: "S", isSelected: false },
        { id: 6, character: "S", isSelected: false },
      ]);
      console.log(response.data);
      setHabitsArray([...habitsArray, response.data]);
      setDisplayNewHabit(false);
      console.log(habitsArray);
    });
    promise.catch(() => {
      setLoad(false);
      alert("Algo deu errado. Tente novamente.");
    });
  }

  function cancel() {
    setBody({ name: "", days: [] });
    setWeekdays([
      { id: 0, character: "D", isSelected: false },
      { id: 1, character: "S", isSelected: false },
      { id: 2, character: "T", isSelected: false },
      { id: 3, character: "Q", isSelected: false },
      { id: 4, character: "Q", isSelected: false },
      { id: 5, character: "S", isSelected: false },
      { id: 6, character: "S", isSelected: false },
    ]);
    setDisplayNewHabit(false);
  }

  function deleteHabit(id) {
    const confirmDelete = window.confirm(
      "Você realmente deseja apagar esse hábito?"
    );
    if (confirmDelete) {
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      promise.then(loadHabits);
    }
  }

  return (
    <Container>
      <Header />
      <Add>
        <span
          onClick={() => {
            console.log(body);
            console.log(habitsArray);
            console.log(habitsArray.length);
          }}
        >
          Meus hábitos
        </span>
        <button
          onClick={() => {
            setDisplayNewHabit(true);
          }}
        >
          +
        </button>
      </Add>
      {displayNewHabit ? (
        <NewHabitContainer>
          <input
            disabled={load}
            value={body.name}
            onChange={(e) => setBody({ ...body, name: e.target.value })}
            placeholder="nome do hábito"
            type="text"
            className="habit-name"
          />
          <WeekdaysContainer>
            {weekdays.map((day) => {
              return (
                <Weekday
                  disabled={load}
                  onClick={() => {
                    selectDay(day);
                    console.log(weekdays);
                  }}
                  selection={day.isSelected}
                >
                  {day.character}
                </Weekday>
              );
            })}
          </WeekdaysContainer>
          <ButtonsContainer>
            <button disabled={load} onClick={cancel} className="cancel">
              Cancelar
            </button>
            <button disabled={load} onClick={sendHabit} className="save">
              {load ? (
                <Loader
                  type="ThreeDots"
                  color="#FFFFFF"
                  height={30}
                  width={30}
                />
              ) : (
                "Salvar"
              )}
            </button>
          </ButtonsContainer>
        </NewHabitContainer>
      ) : (
        ""
      )}
      {habitsArray.length < 1 ? (
        <Description>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </Description>
      ) : (
        ""
      )}
      {habitsArray.map((i) => (
        <Habit>
          {console.log(i)}
          <div className="container-delete">
            <span>{i.name}</span>
            <TrashOutline disabled={load} onClick={() => deleteHabit(i.id)} />
          </div>
          <WeekdaysContainer habit={true}>
            {i.days.map((i) => {
              return (
                <div disabled={load} className="habit-weekday">
                  {i === 1 || i === 5 || i === 6
                    ? "S"
                    : i === 3 || i === 4
                    ? "Q"
                    : i === 2
                    ? "T"
                    : "D"}
                </div>
              );
            })}
          </WeekdaysContainer>
        </Habit>
      ))}

      <Footer />
    </Container>
  );
};

export default Habits;

const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
  font-family: "Lexend Deca", sans-serif;
`;

const Add = styled.div`
  display: flex;
  padding-left: 7.5%;
  padding-right: 7.5%;
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
const NewHabitContainer = styled.div`
  background: #ffffff;
  width: 85%;
  height: 180px;
  margin: 0 auto;
  margin-top: 22px;
  border-radius: 5px;

  .habit-name {
    margin-left: 7.5%;
    margin-top: 18px;
    border: 1px solid #d4d4d4;
    width: 85%;
    height: 45px;
    border-radius: 5px;
    outline: none;
  }
`;
const WeekdaysContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: ${(props) => (props.habit ? "0px" : "7.5%")};
  padding-bottom: ${(props) => (props.habit ? "10px" : "0px")};
`;

const Weekday = styled.button`
  background: ${(props) => (props.selection ? "#CFCFCF" : "#FFFFFF")};
  display: flex;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  outline: none;
  font-weight: 400;
  line-height: 25px;
  color: ${(props) => (props.selection ? "#FFFFFF" : "#dbdbdb")}; ;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 7.5%;
  margin-top: 30px;
  button {
    margin-left: 10px;
    height: 35px;
    width: 84px;
    border-radius: 4.6px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
  }
  .save {
    color: #ffffff;
    background: #52b6ff;
  }
  .cancel {
    color: #52b6ff;
    background: #ffffff;
  }
`;

const Habit = styled.div`
  background: #ffffff;
  width: 85%;
  height: auto;
  margin: 0 auto;
  margin-top: 22px;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;

  span {
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #666666;
  }
  .container-delete {
    display: flex;
    justify-content: space-between;
  }

  .habit-weekday {
    background: #cfcfcf;
    display: flex;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    outline: none;
    font-weight: 400;
    line-height: 25px;
    color: #ffffff;
  }
`;
