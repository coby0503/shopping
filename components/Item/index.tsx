import { NextPage } from "next";
import styled from "styled-components";

interface ItemInfo {
  name: string;
  description: string;
}

interface Props {
  item: ItemInfo;
}

const check = (e: React.MouseEvent<HTMLElement>) => {
  const boxList = document.querySelectorAll(".item-box");
  console.log(boxList.length);
};

const Item: NextPage<Props> = ({ item }) => {
  return (
    <ItemContainer className="item-box" onClick={(e) => check(e)}>
      <div>{item.name}</div>
      <div>{item.description}</div>
    </ItemContainer>
  );
};
export default Item;

const ItemContainer = styled.div`
  flex: none;
  height: 100%;
  width: 300px;
  border: 2px solid black;
  box-sizing: border-box;
`;
