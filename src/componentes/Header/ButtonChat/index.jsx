import { Button, Typography } from "@mui/material"
import ChatIcon from '@mui/icons-material/Chat';


const ButtonChat = () => {
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
            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Archivo, sans-serif' }}>Chat</Typography>
            <ChatIcon />
        </Button>
    )
}

export default ButtonChat