import styled from "styled-components";

const Message = styled.div`
  justify-content: center;
  padding: 5vh;
  font-size: 2vh;
  font-weight: 600;
  color: #333;
  text-align: center;
`;

function Home() {
  return (
    <Message>
      <h1>Search for a Github user to access their public repos</h1>
    </Message>
  );
}

export default Home;
