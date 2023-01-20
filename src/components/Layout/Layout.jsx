import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Navigation, NavItem } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <header>
          <Navigation>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/movies">Movies</NavItem>
          </Navigation>
        </header>
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
