import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <span>TrackIt</span>
      <img
        src="https://stc.ofuxico.com.br/img/upload/noticias/2020/02/27/bob-esponja-episodio-especial-melhores-momentos-nickelodeon_372085_36.jpg"
        alt=""
      />
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

  span {
    font-family: "Playball", cursive;
    font-size: 39px;
    font-weight: 400;
    line-height: 49px;
    text-align: left;
    margin-left: 10px;
  }

  img {
    height: 51px;
    width: 51px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
