import React from "react";
import styled from "styled-components";

type PaginationProps = {
  reposPerPage: number;
  totalRepos: number;
  setCurrentPage: (page: number) => void;
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background-color: black;
  a {
    text-decoration: none;
  }
`;

const PaginationButton = styled.button`
  display: flex;
  margin: 1vh;
  color: white;
  font-size: 2vh;
  background-color: steelblue;
  padding: 10px;
  border-radius: 30px;
  cursor: pointer;
`;

export const Pagination = ({
  totalRepos,
  reposPerPage,
  setCurrentPage,
}: PaginationProps) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      {pages.map((page, index) => {
        return (
          <PaginationButton key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </PaginationButton>
        );
      })}
    </PaginationContainer>
  );
};
