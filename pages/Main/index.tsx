import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import MainFooter from "../../components/MainFooter";
import Carousel from "../../components/Carousel";

const Main = () => {
  return (
    <MainWrap>
      <MainArea>
        <MainHeader />
        <Carousel />
        <Carousel />
        <Carousel />
        <MainFooter />
      </MainArea>
    </MainWrap>
  );
};
export default Main;

const MainWrap = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  min-width: 1400px;
  min-height: 1200px;
  background-color: lightblue;
  justify-items: center;
  box-sizing: border-box;
`;
const MainArea = styled.div`
  display: grid;
  height: 100%;
  width: 1400px;
  background-color: lightgray;
  grid-template-rows: 1fr 3fr 3fr 3fr 1fr;
`;
