import { NextPage } from "next";
import styled from "styled-components";

interface ItemInfo {
  name: string;
  description: string;
}

interface Props {
  item: ItemInfo;
  checkItem: number;
  setCheckItem: React.Dispatch<React.SetStateAction<number>>;
  boxIndex: number;
  change: boolean;
}

const ItemContainer = styled.div<{ change: boolean }>`
  flex: none;
  height: 60px;
  width: 100px;
  border: 2px solid black;
  margin-right: 20px;
  padding: 15px;
  border-radius: 10px;
  box-sizing: border-box;
  transition: ${(props) => (props.change ? "0.2s linear" : "none")};
  &.checkItem {
    background-color: lightblue;
    height: 100%;
    width: 200px;
  }
`;
const Item: NextPage<Props> = ({
  item,
  checkItem,
  setCheckItem,
  boxIndex,
  change,
}) => {
  if (checkItem === boxIndex) {
    console.log("hello");
  }
  return (
    <ItemContainer
      className={boxIndex === checkItem ? " checkItem" : ""}
      onClick={() => setCheckItem(boxIndex)}
      change={change}
    >
      <div>{item.name}</div>
      <div>{item.description}</div>
    </ItemContainer>
  );
};
export default Item;

// 부모에서 선택된 박스의 인덱스를 받아옴.
// 부모에서 받은 키  인덱스와 선택된 인덱스와 같을 때  박스가 커지는 클래스를 부여함
