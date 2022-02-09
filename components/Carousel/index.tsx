import styled from "styled-components";
import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import Item from "../Item";

interface itemType {
  name: string;
  description: string;
}

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
];
const CarouselWrap = styled.div<{ value: number; toggle: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  transition: ${(props) => (props.toggle ? "0.5s linear" : "none")};
  transform: translateX(${(props) => props.value * 300 - 1450}px);
`;
const Carousel: NextPage = () => {
  //여기서 스위치를 통해 다른 api를 호출해서 카테고리에 따라 다른 데이터를 저장한다.
  const [test, setTest] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(true);
  const [cool, setCool] = useState<boolean>(true);

  const check = () => {
    if (test === -(items.length / 3 - 2)) {
      setTimeout(() => {
        setToggle(false);
        setTest(items.length / 3 - (items.length / 3 - 1));
      }, 600);
    }
    if (test === items.length / 3 - 3) {
      setTimeout(() => {
        setToggle(false);
        setTest(items.length / 3 - items.length / 3 - 2);
      }, 600);
    }
  };
  const hello = useCallback(() => {
    setTimeout(() => {
      setCool(true);
    }, 700);
  }, []);
  const increaseValue = () => {
    if (cool) {
      setCool(false);
      setToggle(true);
      setTest((test) => test - 1);
      check();
      hello();
    }
  };
  const decreaseValue = () => {
    if (cool) {
      setCool(false);
      setToggle(true);
      setTest((test) => test + 1);
      check();
      hello();
    }
  };
  return (
    <ItemListContainer>
      <button onClick={decreaseValue}>이전</button>
      <CarouselContainer>
        <CarouselWrap className="test" toggle={toggle} value={test}>
          {items.map((item, i) => (
            <Item key={i} item={item} />
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
const CarouselContainer = styled.div`
  width: 1000px;
  height: 100%;
  overflow: hidden;
  background-color: red;
`;
