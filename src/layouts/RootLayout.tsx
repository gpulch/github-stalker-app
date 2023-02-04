import { useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const navigateToUserRepos = () => {
    navigate(`/${username}`);
  };

  return (
    <div className="root-layout">
      <header>
        <Link to="/">{<h1>Github Stalker v2</h1>}</Link>
        <input
          value={username}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigateToUserRepos();
            }
          }}
          type="text"
          placeholder="Search"
        />
        <button onClick={navigateToUserRepos}>Search</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
