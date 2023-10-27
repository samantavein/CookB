import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #5900a1;
  text-decoration: none;
`;

const FormContainer = styled.form`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 70%;
  margin: auto; 
`;
const StyledTitle = styled.h1`
  font-size: 25px;
  color: white;
  text-decoration: none;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SearchLabel = styled.p`
  font-size: 18px;
  color: white;
  margin-right: 10px;
`;
const SearchInput = styled.input`
  font-size: 18px;
  border: none;
  border-radius: 3px;
  padding: 5px; 
`;

const Navbar = ({ searchTerm, handleSearchInput }) => {

  return (
    <NavbarContainer>
      <FormContainer>
        <Link to="/">
          <StyledTitle>Cook Book</StyledTitle>
        </Link>
        <SearchContainer>
          <SearchLabel>Search:</SearchLabel>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={handleSearchInput}
          />
        </SearchContainer>
      </FormContainer>
    </NavbarContainer>
  );
};
export default Navbar;
