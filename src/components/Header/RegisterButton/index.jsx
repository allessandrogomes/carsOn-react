import { Button, Typography } from "@mui/material"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { useNavigate } from "react-router-dom";

const RegisterButton = () => {

    return (
        <Button
            onClick={() => window.location.href="/register"}
            variant="contained"
            sx={{
                backgroundColor: '#FFF',
                borderRadius: '32px',
                color: '#2DD4BF',
                gap: '5px',
                '&:hover': { backgroundColor: '#0B2926', color: '#FFF' }
            }}
        >
            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Archivo, sans-serif' }}>Cadastrar</Typography>
            <AssignmentIndIcon />
        </Button>
    )
}

export default RegisterButton