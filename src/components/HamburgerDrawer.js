import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider,  createTheme,  useMediaQuery } from '@mui/material';
import categories from '../data/category';



export default function SwipeableTemporaryDrawer({setcategory}) {
  
  const [state, setState] = React.useState({
   
    left: false,
    
  });
  const prefersDarkmode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => createTheme({
    palette: {
      mode: prefersDarkmode ? 'dark' : 'light',
    },
  }), [prefersDarkmode]);







  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width : 200 ,paddingLeft: 1,paddingRight: 1}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
        <ListItem>
          Categories
          </ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItemButton 
          style={{height:40,borderRadius:3}}
           key={text}
            onClick={()=>setcategory(text)}
            >
          
             
              <ListItemText primary={text} />
            
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon color='action'/></Button>
            <ThemeProvider theme={theme}><SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer> </ThemeProvider>
          
        </React.Fragment>
    
    </div>
  );
}