import { Box, Button, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import LoginModal from '../../Main/LoginModal'
import { useState } from 'react'

const LoginButton = () => {
  const [btnOpenClicked, setBtnOpenClicked] = useState<boolean>(false)

  function openModal() {
    setBtnOpenClicked(true)
    setTimeout(() => {
      setBtnOpenClicked(false)
    }, 500)
  }

  return (
    <Box>
      <Button
        onClick={openModal}
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
          sx={{
            textTransform: 'capitalize',
            fontFamily: 'Archivo, sans-serif',
          }}
        >
          Entrar
        </Typography>
        <LoginIcon />
      </Button>
      <LoginModal onOpen={btnOpenClicked} />
    </Box>
  )
}

export default LoginButton
