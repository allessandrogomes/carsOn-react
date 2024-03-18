import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../Cabecalho/Logo';
import InputSearchCars from './InputSearchCars';
import ButtonAdvertiseAVehicle from './ButtonAdvertiseAVehicle';
import ButtonChat from './ButtonChat';
import ButtonLogin from './ButtonLogin';

const drawerWidth = 240;

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box sx={{
            alignItems: 'center',
            backgroundColor: '#2DD4BF',
            display: 'flex',
            flexDirection: 'column',
            gap: '100px',
            height: '100vh',
            paddingTop: '50px'
        }}
            onClick={handleDrawerToggle}
        >
            <Logo />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <ButtonAdvertiseAVehicle />
                <ButtonChat />
                <ButtonLogin />
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: '#2DD4BF' }} className="h-28 justify-center" component="nav">
                <Toolbar sx={{
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
                        sx={{ mr: 2, display: { md: 'none' }, justifySelf: { xs: 'start', md: undefined } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{ display: { xs: 'none', sm: 'block' }, justifySelf: { xs: 'center' } }}
                    >
                        <Logo />
                    </Box>
                    <InputSearchCars />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1rem' }}>
                        <ButtonAdvertiseAVehicle />
                        <ButtonChat />
                        <ButtonLogin />
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default Header;
