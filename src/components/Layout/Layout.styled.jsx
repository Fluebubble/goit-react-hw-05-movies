import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  padding: 10px 10px;
  border-bottom: 1px solid black;
`;

export const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};

  &.active {
    color: orange;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  color: ${p => p.theme.colors.text};
  /* background-color: ${p => p.theme.colors.background}; */
`;
