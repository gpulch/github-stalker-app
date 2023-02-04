import { LoaderFunction, useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

type Repo = {
  id: number;
  name: string;
  description: string;
  language: string;
};
type Repos = [];

export default function UserRepos() {
  const repos = useLoaderData() as Repos;
  const { username } = useParams();

  return (
    <div>
      {repos.map((repo: Repo) => {
        return (
          <div key={repo.id}>
            <h2>
              <Link to={`/${username}/${repo.name}`}>{repo.name}</Link>
            </h2>
            <p>
              {repo.description ? repo.description : "no description available"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export const reposLoader: LoaderFunction = async (args: any) => {
  const { username } = args.params;
  console.log(args);
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  return res.json();
};
