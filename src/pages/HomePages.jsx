import React from "react";
import { ContainerHome } from "../assets/styled/HomePages";
import { HomeCarrousel } from "../components/HomeCarrousel";
function HomePages() {
  return (
    <ContainerHome>
      <HomeCarrousel />
    </ContainerHome>
  );
}

export { HomePages };
