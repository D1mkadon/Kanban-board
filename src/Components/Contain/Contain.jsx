import { Col, Row } from "antd";
import { Typography } from "antd";
import ToDoItem from "./ToDoItem";
import { useEffect, useState } from "react";
const { Title } = Typography;

const Contain = ({ data }) => {
  const [boards, setBoards] = useState([
    { id: 1, title: "Todo", items: data },
    { id: 2, title: "In Progress", items: [] },
    { id: 3, title: "Done", items: [] },
  ]);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const dragOverHandler = (e) => {
    e.preventDefault();
  };
  const onDragLeaveHandler = (e) => {
    e.target.style.boxShadow = "none";
  };
  const onDragStartHandler = (e, board, item) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  };
  const onDragEndHandler = (e) => {
    e.target.style.boxShadow = "none";
  };
  const dropCardHandler = (e, board) => {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  };
  return (
    <div className="ParentColumn">
      {boards.map((board) => (
        <div
          key={board.id}
          className="column"
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHandler(e, board)}
        >
          <div className="ColumnTitle">{board.title}</div>
          {board?.items
            ? board?.items?.map((item) => (
                <div
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragLeave={(e) => onDragLeaveHandler(e)}
                  onDragStart={(e) => onDragStartHandler(e, board, item)}
                  onDragEnd={(e) => onDragEndHandler(e)}
                  draggable="true"
                  className="item"
                  key={item.id}
                >
                  <p style={{ fontWeight: "bold" }}> {item.title}</p>
                  {/* <span> {item.body}</span> */}
                </div>
              ))
            : null}
        </div>
      ))}
    </div>
  );
};

export default Contain;
