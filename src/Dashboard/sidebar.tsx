import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LanIcon from '@mui/icons-material/Lan';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CallIcon from '@mui/icons-material/Call';
import './SideBar.css';

export default function SideBar() {
  const [state, setState] = React.useState(false);


  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState(open);
      };


  const menuItems = <>
    <Box
      sx={{ width: 250, px: 2.5, pt: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >

      <List subheader='Dashboard'>
        <ListItem >
          <ListItemButton>
            <ListItemIcon>
              <AutoGraphOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Analytics'} />
          </ListItemButton>
        </ListItem>
        <ListItem >
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Order'} />
          </ListItemButton>
        </ListItem>
        <ListItem >
          <ListItemButton>
            <ListItemIcon>
              <AddShoppingCartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Create Manual Order'} />
          </ListItemButton>
        </ListItem>
      </List>
      <List subheader="Manage">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary={'Manage Discount'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MedicalServicesIcon />
            </ListItemIcon>
            <ListItemText primary={'Manage Test'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MedicalServicesIcon />
            </ListItemIcon>
            <ListItemText primary={'Manage Package'} />
          </ListItemButton>
        </ListItem>  <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MedicalServicesIcon />
            </ListItemIcon>
            <ListItemText primary={'Manage Partner Labs'} />
          </ListItemButton>
        </ListItem>  <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MedicalServicesIcon />
            </ListItemIcon>
            <ListItemText primary={'Manage Radiology Tests'} />
          </ListItemButton>
        </ListItem>  <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MedicalServicesIcon />
            </ListItemIcon>
            <ListItemText primary={'Manage Radoiology Partners'} />
          </ListItemButton>
        </ListItem>  <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText primary={'Manage Customers'} />
          </ListItemButton>
        </ListItem>  <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LanIcon />
            </ListItemIcon>
            <ListItemText primary={'Manage Employees'} />
          </ListItemButton>
        </ListItem>  <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddLocationAltIcon />
            </ListItemIcon>
            <ListItemText primary={'Manage Location'} />
          </ListItemButton>
        </ListItem>
      </List>
      <List subheader='Health Expert'>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary={'Call Request'} />
          </ListItemButton>
        </ListItem>

      </List>

    </Box>
  </>


  return (
    <div>
      <React.Fragment >
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor='left'
          open={state}
          onClose={toggleDrawer(false)}
        >
          <div className='box_sm'>
          {menuItems}
          </div>
          <div className='box_lg'>
          {menuItems}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
