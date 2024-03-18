import SearchIcon from '@mui/icons-material/Search';
import { Box, Input } from '@mui/material';


const InputSearchCars = () => {
    return (
        <Box sx={{
            alignItems: 'center',
            backgroundColor: '#FFF',
            borderRadius: '32px',
            display: 'flex',
            gap: '5px',
            justifyContent: 'space-between',
            padding: '5px 12px',
            width: { lg: '300px', xl: '500px' }
        }}
        >
            <Input
                placeholder="Pesquise por um veículo"
                type="text"
                disableUnderline
                sx={{ fontFamily: 'Archivo, sans-serif', width: '100%' }}
            />
            <SearchIcon sx={{ color: '#2DD4BF', cursor: 'pointer' }} />
        </Box>
    )
}

export default InputSearchCars