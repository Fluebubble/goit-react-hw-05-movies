import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Poster = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 40px) / 4);
`;

export const styledLink = styled(Link)``;
