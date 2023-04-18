import Contain, { defaultBoard } from "./Contain/Contain";
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
  const [data, setData] = useState([]);
  const [activeRepo, setActiveRepo] = useState([]);
  const [currentLink, setCurrentLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  async function getNames() {
    setCurrentLink(() => inputValue);
    const splited = inputValue.replace(/\/+$/, "").split("/");
    const newOwner = splited[splited.length - 1];
    const newRepo = splited[splited.length - 2];
    const find = data.find((e) => e.repoName === newOwner);
    if (find) {
      setActiveRepo(find);
    } else {
      setOwner(newOwner);
      setRepo(newRepo);
    }
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
        .then((e) => {
          setData((prevState) => [
            ...prevState,
            {
              data: e.data,
              userName: repo,
              repoName: owner,
            },
          ]),
            setActiveRepo({
              data: e.data,
              userName: repo,
              repoName: owner,
            });
        });
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
        repo={inputValue}
        link={currentLink}
        owner={repo}
      />
      {data.length ? (
        <Contain
          activeRepo={activeRepo}
          setActiveRepo={setActiveRepo}
          data={data}
          setData={setData}
        />
      ) : null}
    </>
  );
};
export default HomePage;
