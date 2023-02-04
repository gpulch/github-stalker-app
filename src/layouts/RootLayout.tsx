import { useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100vw;
  background-color: black;
  
  a {
    text-decoration: none;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 4vh;
  border: 5px solid white;
  padding: 10px;
  border-radius: 30px;
  background-color: steelgray;
  a {
    text-decoration: none;
  }
`;

const SearchComponent = styled.div`
heigh
padding: 1vh;
`;
const SearchInput = styled.input`
  text-align: center;
  background-color: #24292e;
  padding: 10px;
  border-radius: 30px 0 0 30px;
  font-size: 1.5vh;
  color: white;
`;

const SearchButton = styled.button`
  color: white;
  font-size: 1.5vh;
  background-color: steelblue;
  padding: 10px;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
`;

const Main = styled.main`
  height: 80vh;
  width: 100vw;
`;

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
    <Container>
      <Header>
        <Link to="/">{<Title>Github Stalker v2</Title>}</Link>
        <SearchComponent>
          <SearchInput
            value={username}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigateToUserRepos();
              }
            }}
            type="text"
            placeholder="Enter Github Username"
          />
          <SearchButton onClick={navigateToUserRepos}>Search</SearchButton>
        </SearchComponent>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}
