import React from "react";
import Carousel from "../../components/Carousel";
import { StyledHome } from "./styles";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Carousel />
    </StyledHome>
  );
};

export default Home;
