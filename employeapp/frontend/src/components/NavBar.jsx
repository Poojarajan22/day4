import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
          
          <AppBar>
              <Toolbar>
                  <Typography variant="h6">HOME</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to='/add'>
                      <Button variant="contained" color="primary">add</Button>                         
                  </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/view">
                <Button variant= "contained" color="primary">View</Button>
                  </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                  </Toolbar>
          </AppBar><br/><br/><br/><br/>

                        
    </div>
  )
}
 export default NavBar