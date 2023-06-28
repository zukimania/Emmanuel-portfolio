import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #555;
  color: white;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  margin: 0 10px;
`;

const IconLink = styled(Link)`
  color: white;
  font-size: 24px;
  text-decoration: none;
`;

const NavbarWithIcons = () => {
  return (
    <Navbar>
      <IconLink to="/">
        <i className="fa fa-home"></i>
      </IconLink>
      <NavLinks>
        <NavLink>
          <IconLink to="/search">
            <i className="fa fa-search"></i>
          </IconLink>
        </NavLink>
        <NavLink>
          <IconLink to="/inbox">
            <i className="fa fa-envelope"></i>
          </IconLink>
        </NavLink>
        <NavLink>
          <IconLink to="/notifications">
            <i className="fa fa-bell"></i>
          </IconLink>
        </NavLink>
        <NavLink>
          <IconLink to="/profile">
            <i className="fa fa-user"></i>
          </IconLink>
        </NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default NavbarWithIcons;