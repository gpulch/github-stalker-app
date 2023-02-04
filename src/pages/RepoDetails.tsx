import { useLoaderData, useParams, useLocation } from "react-router-dom";

export default function RepoDetails() {
  const { username } = useParams();
  const location = useLocation();
  console.log(location.state);
  const repo = location.state.repo

  return (
    <>
      Details about {username}'s " {repo.name} " repo :
      <br />
      Repo Id: {repo.id}
      <br />
      Description: {repo.description ? repo.description : "no description"}
      <br />
      Main Language: {repo.language}
    </>
  );
}
