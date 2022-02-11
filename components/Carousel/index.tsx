import styled from "styled-components";
import { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import Item from "../Item";

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
  {
    name: "Random Name #3",
    description: "Hello World!",
  },
  {
    name: "Random Name #4",
    description: "Hello World!",
  },
  {
    name: "Random Name #5",
    description: "Hello World!",
  },
  {
    name: "Random Name #6",
    description: "Hello World!",
  },
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
  {
    name: "Random Name #3",
    description: "Hello World!",
  },
  {
    name: "Random Name #4",
    description: "Hello World!",
  },
  {
    name: "Random Name #5",
    description: "Hello World!",
  },
  {
    name: "Random Name #6",
    description: "Hello World!",
  },
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
  {
    name: "Random Name #3",
    description: "Hello World!",
  },
  {
    name: "Random Name #4",
    description: "Hello World!",
  },
  {
    name: "Random Name #5",
    description: "Hello World!",
  },
  {
    name: "Random Name #6",
    description: "Hello World!",
  },
]; // 데이터는 한묶음만 보내고 안에서 *3 처리
// 좌우 끝을 보여주지 않기 위해 *3

const CarouselContainer = styled.div<{ containerSize: number }>`
  width: ${(props) => props.containerSize}px;
  height: 100%;
  overflow: hidden;
`;

const CarouselWrap = styled.div<{
  defaultMargin: number;
  boxSize: number;
  margin: number;
  value: number;
  toggle: boolean;
}>`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  transition: ${(props) => (props.toggle ? "0.3s linear" : "none")};
  transform: translateX(
    ${(props) =>
      props.value * (props.boxSize + props.margin) + props.defaultMargin}px
  );
`;
const Carousel: NextPage = () => {
  //캐러셀 컨테이너의 크기를 입력받는다. or 서브박스의 크기를 입력받는다.
  //캐러셀 컨테이너의 크기를 박스기준으로 정함 or 컨테이너 박스 크기도 입력받음.
  //여기서 스위치를 통해 다른 api를 호출해서 카테고리에 따라 다른 데이터를 저장한다.
  //캐러셀안에 들어갈 데이터 선언은 이 안에.
  const itemCount = Math.floor(items.length / 3);
  const containerSize = 1000;
  const boxSize = 120;
  const margin = 20;
  const large = containerSize - (boxSize * 1.5 + margin);
  const medium =
    large - Math.floor(large / (boxSize + margin)) * (boxSize + margin);
  const small =
    Math.floor(Math.floor(large / (boxSize + margin)) / 2) *
      (boxSize + margin) +
    Math.floor(medium + 20) / 2;
  console.log(small);
  const innerBoxCount = Math.floor(containerSize / (boxSize + margin));
  let defaultMargin;
  if (innerBoxCount % 2 === 0) {
    const large = containerSize - (boxSize * 1.5 + margin);
    const medium =
      large - Math.floor(large / (boxSize + margin)) * (boxSize + margin);
    defaultMargin =
      Math.floor(Math.floor(large / (boxSize + margin)) / 2) *
        (boxSize + margin) +
      Math.floor(medium + 20) / 2;
    //짝수 계산하는 것은 생각이 더 필요할 듯.
  } else {
    const large = containerSize - (boxSize * 1.5 + margin);
    const medium =
      large - Math.floor(large / (boxSize + margin)) * (boxSize + margin);
    defaultMargin =
      Math.floor(Math.floor(large / (boxSize + margin)) / 2) *
        (boxSize + margin) +
      Math.floor(medium + 20) / 2;
  }
  const [test, setTest] = useState<number>(-itemCount);
  const [toggle, setToggle] = useState<boolean>(true);
  const [cool, setCool] = useState<boolean>(true);
  useEffect(() => {
    if (test < -(items.length / 3 + 3)) {
      setTimeout(() => {
        setToggle(false);
        setTest(test + 6);
      }, 400);
      return;
    }
    if (test > -(items.length / 3 - 4)) {
      setTimeout(() => {
        setToggle(false);
        setTest(test - 6);
      }, 400);
    }
  }, [test]);
  const runCool = useCallback(() => {
    setTimeout(() => {
      setCool(true);
    }, 500);
  }, []);
  const increaseValue = () => {
    if (cool) {
      setCool(false);
      setToggle(true);
      setTest((test) => test - 1);
      runCool();
    }
  };
  const decreaseValue = () => {
    if (cool) {
      setCool(false);
      setToggle(true);
      setTest((test) => test + 1);
      runCool();
    }
  };
  const checkValue = (boxIndex: number) => {
    if (cool) {
      setCool(false);
      setToggle(true);
      setTest(boxIndex);
      runCool();
    }
  };
  return (
    <ItemListContainer>
      <button onClick={decreaseValue}>이전</button>
      <CarouselContainer containerSize={containerSize}>
        <CarouselWrap
          defaultMargin={defaultMargin}
          boxSize={boxSize}
          margin={margin}
          toggle={toggle}
          value={test}
        >
          {items.map((item, i) => (
            <Item
              key={i}
              item={item}
              checkItem={Math.abs(test)}
              boxIndex={i}
              change={toggle}
              test={checkValue}
            />
          ))}
        </CarouselWrap>
      </CarouselContainer>
      <button onClick={increaseValue}>다음</button>
    </ItemListContainer>
  );
};
export default Carousel;

const ItemListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  align-items: center;
`;
