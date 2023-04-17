import { Typography } from "antd";

const { Title } = Typography;
const ToDoItem = ({ info, handleChangeType }) => {
  return (
    <div
      onClick={(e) => handleChangeType(e, info)}
      style={{
        width: "100%",
        margin: "10px 0",
        height: "150px",
        cursor: "grab",
        border: "1px solid #fff",
        borderRadius: "35px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Title style={{ textAlign: "center", width: "100%" }} level={4}>
        {info.number} {info.title}
      </Title>
      <Title
        style={{ textAlign: "center", width: "100%", marginTop: "0" }}
        level={5}
      >
        {info.body}
      </Title>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p>author is "{info.author_association}" </p> | <p>comments</p>
      </div>
    </div>
  );
};

export default ToDoItem;
