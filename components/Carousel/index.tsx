import styled from "styled-components";
import { NextPage } from "next";
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
];
const Carousel: NextPage = () => {
  //여기서 스위치를 통해 다른 api를 호출해서 카테고리에 따라 다른 데이터를 저장한다.
  return (
    <ItemListContainer>
      <button>이전</button>
      <CarouselContainer>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </CarouselContainer>
      <button>다음</button>
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
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
