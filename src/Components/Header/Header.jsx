import { Button, Input } from "antd";
import Link from "next/link";

const Header = ({ getTodo, handleValue, inputValue, link, owner }) => {
  return (
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        flexWrap: "wrap",
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
      {owner ? <p>Owner: {owner}</p> : null}

      <Link href={link}>{link}</Link>
    </div>
  );
};

export default Header;
