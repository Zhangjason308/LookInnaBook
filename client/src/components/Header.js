import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, Tabs, Tab} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {NavLink} from 'react-router-dom'
const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar position='sticky'>
            <Toolbar>
                <Typography>
                    <AutoStoriesIcon/>
                    LookInnaBook Book Store
                </Typography>
                <Tabs sx={{ml:"auto"}}textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={NavLink} to="/login" label='Login'/>
                    <Tab LinkComponent={NavLink} to="/AddBook" label='Add a Book'/>
                    <Tab LinkComponent={NavLink} to="/books" label='Books'/>
                    <Tab LinkComponent={NavLink} to="/cart" label='Cart'/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header