import { Button, Input } from "antd";
import Link from "next/link";

const Header = ({
  getTodo,
  handleValue,
  inputValue,
  link,
  owner,
  activeRepo,
}) => {
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
      {owner && activeRepo ? (
        <Link href={activeRepo?.data[0].user.html_url}>Owner: {owner}</Link>
      ) : null}

      <Link href={link}>{link}</Link>
    </div>
  );
};

export default Header;
