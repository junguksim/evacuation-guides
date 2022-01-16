import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>안녕하세요!!</h1>
      <Link to={"guides?placeId=1&placeName=롯데백화점 포항점"}>롯데백화점 포항점 피난안내도</Link>
      <br />
      <Link to={"guides?placeId=2&placeName=북포항 CGV"}>북포항 CGV 피난안내도</Link>
      <br />
      <Link to={"guides?placeId=3&placeName=포은중앙도서관"}>포은중앙도서관 피난안내도</Link>
    </>
  );
};

export default Home;
