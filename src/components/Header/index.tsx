import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Logo from './Logo'
import AdvertiseButton from './AdvertiseButton'
import ChatButton from './ChatButton'
import LoginButton from './LoginButton'
import SearchBar from './SearchBar'
import RegisterButton from './RegisterButton'

const drawerWidth = 240

interface IProps {
  window?: Window
}

function Header(props: IProps) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: '#2DD4BF',
        display: 'flex',
        flexDirection: 'column',
        gap: '100px',
        height: '100vh',
        paddingTop: '50px',
      }}
      onClick={handleDrawerToggle}
    >
      <Logo logoType="logoMobile" />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <AdvertiseButton advertiseButtonType="advertiseButtonMobile" />
        <ChatButton chatButtonType="chatButtonMobile" />
        <LoginButton loginButtonType="loginButtonMobile" />
        <RegisterButton registerButtonType="registerButtonMobile" />
      </Box>
    </Box>
  )

  const container =
    typeof window !== 'undefined' ? window.document.body : undefined

  return (
    <Box data-testid="header" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: '#2DD4BF',
          height: '120px',
          justifyContent: 'center',
        }}
        component="nav"
      >
        <Toolbar
          sx={{
            display: 'flex',
            gap: { sm: '50px', md: '0' },
            justifyContent: { xs: 'center', md: 'space-around' },
            position: { xs: 'relative', md: undefined },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { md: 'none' },
              justifySelf: { xs: 'start', md: undefined },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              justifySelf: { xs: 'center' },
            }}
          >
            <Logo logoType="logoDesktop" />
          </Box>
          <SearchBar />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1rem' }}>
            <AdvertiseButton advertiseButtonType="advertiseButtonDesktop" />
            <ChatButton chatButtonType="chatButtonDesktop" />
            <LoginButton loginButtonType="loginButtonDesktop" />
            <RegisterButton registerButtonType="registerButtonDesktop" />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}

export default Header
