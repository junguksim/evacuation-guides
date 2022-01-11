import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingPageLayout>
      <LoadingGuideLayout />
      <LoadingGuideLayout />
      <LoadingGuideLayout />
      <LoadingGuideLayout />
    </LoadingPageLayout>
  );
};
const LoadingPageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  margin: 6px;

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 60%;
  }
`;

const LoadingGuideLayout = styled.div`
  display: flex;
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  position: relative;
  overflow: hidden;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 98%;
  height: 390px;
  padding: 5px;
  margin: 6px;

  ::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);
    animation: load 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }
`;

export default Loading;
