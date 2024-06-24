import { Box, Button, Paper, TextField } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Footer from '../../components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Register() {
    return (
        <div className="flex flex-col justify-between items-center w-full min-h-[100vh] bg-color2">
            <div className="flex items-center mt-6 gap-4 w-[80%] max-w-[750px] mx-6">
                <button onClick={() => window.location.href = "/"}><ArrowBackIcon /></button>
                <h1 className="font-bold text-4xl">Crie sua conta na <span className="text-white">CarsOn</span></h1>
            </div>
            <Box component={Paper} className="flex flex-col border-2 border-color1 p-10 w-[80%] max-w-[750px] mx-6">
                <h1 className="font-bold mb-6">Dados pessoais</h1>
                <form className="flex flex-wrap gap-4 justify-center mb-6">
                    <TextField label="Nome" variant="outlined" />
                    <TextField label="Sobrenome" variant="outlined" />
                    <TextField label="Data de nascimento" placeholder="DD/MM/AAAA" variant="outlined" />
                    <TextField label="Telefone" placeholder="(XX) XXXXX-XXXX" variant="outlined" />
                    <TextField label="CEP (Apenas números)" placeholder="ex: 44555670" variant="outlined" />
                    <TextField label="Estado" variant="outlined" disabled />
                    <TextField label="Cidade" variant="outlined" disabled />
                    <TextField label="Rua" variant="outlined" />
                    <TextField label="Número" variant="outlined" />
                </form>
                <Button sx={{ backgroundColor: "#38BCAC", '&:hover': { backgroundColor: '#2d9488' } }} className="w-[max-content] self-end" variant="contained">Continuar <ChevronRightIcon /></Button>
            </Box>
            <Footer bgColor="bg-color2" />
        </div>
    )
}