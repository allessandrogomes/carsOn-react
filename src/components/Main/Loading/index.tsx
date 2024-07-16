import { Box, CircularProgress, Typography } from '@mui/material'

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center',
        mt: '100px',
        gap: '15px',
      }}
    >
      <Typography fontWeight="bold">Carregando</Typography>
      <CircularProgress />
    </Box>
  )
}
