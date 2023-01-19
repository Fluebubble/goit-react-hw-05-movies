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
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
