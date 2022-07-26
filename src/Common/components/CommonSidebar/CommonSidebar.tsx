import { DrawerProps, Toolbar, IconButton, Divider, List } from '@mui/material';
import { CoommonSidebarStyled } from './CommonSidebar.styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import useFetchPokeTypes from '../../../Types/hooks/useFetchPokeTypes';
import CommonSidebarElement from '../CommonSidebarElement/CommontSidebarElement';

export interface CoommonSidebarProps extends DrawerProps {
  toggleDrawer: () => void;
  drawerWidth: number;
}

const CommonSidebar = ({ open, toggleDrawer, drawerWidth }: CoommonSidebarProps): JSX.Element => {
  const { pokeTypes } = useFetchPokeTypes();

  return (
    <CoommonSidebarStyled variant="permanent" open={open} drawerWidth={drawerWidth}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1]
        }}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {pokeTypes?.map((el) => (
          <CommonSidebarElement key={el} type={el} />
        ))}
      </List>
    </CoommonSidebarStyled>
  );
};

export default CommonSidebar;
