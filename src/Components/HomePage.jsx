import Contain from "./Contain/Contain";
import Header from "./Header/Header";
import { Octokit } from "octokit";
import { useEffect, useState } from "react";
const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

const HomePage = () => {
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  async function getNames() {
    const splited = inputValue.replace(/\/+$/, "").split("/");
    const newOwner = splited[splited.length - 1];
    const newRepo = splited[splited.length - 2];
    setOwner(newOwner);
    setRepo(newRepo);
  }
  useEffect(() => {
    if (!owner || !repo) {
      return;
    }
    async function getTodo() {
      await getNames();
      await octokit
        .request(`GET https://api.github.com/repos/{repo}/{owner}/issues`, {
          owner,
          repo,
        })
        .then((e) => setData(e.data));
    }
    getTodo();
  }, [owner, repo]);

  const handleValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Header
        getTodo={getNames}
        inputValue={inputValue}
        handleValue={handleValue}
      />
      {data.length ? <Contain data={data} /> : null}
    </>
  );
};

export default HomePage;
