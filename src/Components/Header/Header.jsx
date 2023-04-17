import { Button, Input } from "antd";

const Header = ({ getTodo, handleValue, inputValue }) => {
  return (
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      <Input
        value={inputValue}
        onChange={(e) => handleValue(e)}
        className={"input"}
        placeholder="https://github.com/facebook/react"
      ></Input>
      <Button onClick={getTodo}>Load</Button>
    </div>
  );
};

export default Header;
