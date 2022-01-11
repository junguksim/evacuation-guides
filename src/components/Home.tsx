import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>안녕하세요!!</h1>
      <Link to={"guides?placeId=1"}>롯데백화점 포항점 피난안내도</Link>
      <br />
      <Link to={"guides?placeId=2"}>북포항 CGV 피난안내도</Link>
    </>
  );
};

export default Home;
