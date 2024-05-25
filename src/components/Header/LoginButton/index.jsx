import { Button, Typography } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';

const LoginButton = () => {
    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: '#FFF',
                borderRadius: '32px',
                color: '#2DD4BF',
                gap: '5px',
                '&:hover': { backgroundColor: '#0B2926', color: '#FFF' }
            }}
        >
            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Archivo, sans-serif' }}>Entrar</Typography>
            <LoginIcon />
        </Button>
    )
}

export default LoginButton