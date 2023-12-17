import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { StyledHeader } from './Layout.styled';
import Loader from '../Loader/Loader';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <NavLink className="header-link" to="/">
            Home
          </NavLink>
          <NavLink className="header-link" to="/movies">
            Movies
          </NavLink>
        </nav>
      </StyledHeader>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
