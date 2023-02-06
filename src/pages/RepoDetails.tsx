import { useLoaderData, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

const Tile = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 3vh;
  padding: 5vh;
`;

export default function RepoDetails() {
  const { username } = useParams();
  const location = useLocation();
  console.log(location.state);
  const repo = location.state.repo;

  return (
    <Tile>
      Details about {username}'s " {repo.name} " repo :
      <br />
      <br />
      Repo Id: {repo.id}
      <br />
      Description: {repo.description ? repo.description : "no description"}
      <br />
      Main Language: {repo.language}
      <br />
      Last Updated At: {repo.updated_at}
    </Tile>
  );
}
