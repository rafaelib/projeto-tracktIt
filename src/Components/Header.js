import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../Components/contexts/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <span>TrackIt</span>
      <img src={user.image} alt="" />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #126ba5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;

  span {
    font-family: "Playball", cursive;
    font-size: 39px;
    font-weight: 400;
    line-height: 49px;
    text-align: left;
    margin-left: 7.5%;
  }

  img {
    height: 51px;
    width: 51px;
    border-radius: 50%;
    margin-right: 7.5%;
  }
`;
