import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Poster = styled.img`
  width: 300px;
`;

export const NavItem = styled(NavLink)`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[3]}px;
`;
