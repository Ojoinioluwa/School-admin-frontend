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
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoLogoPlaystation } from 'react-icons/io';
import { Typography } from '@mui/material';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const [focused, setFocused] = React.useState("dashboard")
  const handleChange = (value: string) => {
      setFocused(value);
      navigate(`/admin/${value}`);
    };

    const sideBar = [
        {name: "dashboard", icon: <MailIcon/>},
        {name: "teacher", icon: <MailIcon/>},
        {name: "students", icon: <MailIcon/>},
        {name: "events", icon: <MailIcon/>},
        {name: "annoucements", icon: <MailIcon/>},
        {name: "department", icon: <MailIcon/>},
        {name: "courses", icon: <MailIcon/>},
    ]

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {sideBar.map((value) => (
          <ListItem key={value.name} disablePadding>
            <ListItemButton onClick={()=> handleChange(`${value.name}`)}>
              <ListItemIcon>
                {value.icon}
              </ListItemIcon>
              <ListItemText primary={value.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{fontSize: 50}}><FaBars/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
      <Box sx={{ paddingBottom: 5, display: "flex", alignItems: "center" }}>
          <IoLogoPlaystation
            style={{ fontSize: "28px", color: "#172554", marginRight: "10px" }}
          />
          <Typography variant="h6" component="h1" sx={{ color: "#172554" }}>
            Sequence
          </Typography>
        </Box>
        {DrawerList}
      </Drawer>
    </div>
  );
}