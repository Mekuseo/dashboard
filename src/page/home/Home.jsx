import React from "react";
import Menu from "../../components/menu/Menu";
import "./Home.scss";
import BodyContent from "../../components/bodyContent/BodyContent";

const Home = () => {
  return (
    <div className="home">
      <div className="containerBackground">
        <Menu />
        <BodyContent />
      </div>
    </div>
  );
};

export default Home;
