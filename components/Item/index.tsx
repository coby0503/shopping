import { NextPage } from "next";
import styled from "styled-components";

interface ItemInfo {
  name: string;
  description: string;
}

interface Props {
  item: ItemInfo;
}

const Item: NextPage<Props> = ({ item }) => {
  return (
    <ItemContainer>
      <div>{item.name}</div>
      <div>{item.description}</div>
    </ItemContainer>
  );
};
export default Item;

const ItemContainer = styled.div`
  height: 100%;
  width: 300px;
  float: left;
  transition: 0.8s linear;
  border: 2px solid black;
  box-sizing: border-box;
`;
