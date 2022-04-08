import { BottomNavigationAction } from '@material-ui/core';
import { palette, spacing } from '../themes/generalTheme';
import styled from 'styled-components';

const NavLink = styled(BottomNavigationAction)`
  color: ${palette.secondary.main};
  span {
    font-size: ${spacing(2)}px;
    font-family: Nunito Sans, sans-serif;
  }
`;

export default NavLink;
