import { Button, Typography } from '@mui/material'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'

const RegisterButton = ({
  registerButtonType,
}: {
  registerButtonType: string
}) => {
  return (
    <Button
      data-testid={registerButtonType}
      //window.location.href = '/register'
      onClick={() => alert('Esta página está em Desenvolvimento')}
      variant="contained"
      sx={{
        backgroundColor: '#FFF',
        borderRadius: '32px',
        color: '#2DD4BF',
        gap: '5px',
        '&:hover': { backgroundColor: '#0B2926', color: '#FFF' },
      }}
    >
      <Typography
        sx={{ textTransform: 'capitalize', fontFamily: 'Archivo, sans-serif' }}
      >
        Cadastrar
      </Typography>
      <AssignmentIndIcon />
    </Button>
  )
}

export default RegisterButton
