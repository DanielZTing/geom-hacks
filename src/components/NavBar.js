import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import "./NavBar.css"

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        COVID-19 DONATION AID          
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;
