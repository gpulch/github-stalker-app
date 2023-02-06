import {
  LoaderFunction,
  useLoaderData,
  useParams,
  Link,
} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { Pagination } from "../components/Pagination";

export type Repo = {
  id: number;
  name: string;
  description: string;
  language: string;
};
type Repos = [];

const Message = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  font-size: 3vh;
  font-weight: 600;
  color: #333;
  text-align: center;
  align-items: center;
`;

const Grid = styled.div`
height: 50vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //   grid-template-rows: repeat(2, 1fr);
  border-top: 1px solid black;
  grid-gap: 5vh;
  padding: 5vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  font-size: 1.5vh;
  font-weight: 600;
  color: #333;

  a {
    text-decoration: none;
  }
`;

const Tile = styled.div`
  border: 10px solid black;
  border-radius: 30px;
  height: 20vh;
  color: black;
  overflow-wrap: break-word;
  padding: 10px;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  }
`;

export default function UserRepos() {
  const repos = useLoaderData() as Repos;
  const { username } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(6);
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  return (
    <div>
      <Message>
        user {username} has {repos.length} public repos :
      </Message>
      <Grid>
        {currentRepos.map((repo: Repo) => {
          return (
            <Link to={`/${username}/${repo.name}`} state={{ repo: repo }}>
              <Tile key={repo.id}>
                <h2>{repo.name}</h2>
                <p>
                  {repo.description
                    ? repo.description
                    : "no description available"}
                </p>
              </Tile>
            </Link>
          );
        })}
      </Grid>
      <Pagination
        totalRepos={repos.length}
        reposPerPage={reposPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export const reposLoader: LoaderFunction = async (args: any) => {
  const { username } = args.params;
  console.log(args);
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  return res.json();
};
