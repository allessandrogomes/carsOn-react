import { Button, Typography } from '@mui/material'
import CampaignIcon from '@mui/icons-material/Campaign'

const AdvertiseButton = ({
  advertiseButtonType,
}: {
  advertiseButtonType: string
}) => {
  return (
    <Button
      data-testid={advertiseButtonType}
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
        Anunciar Veículo
      </Typography>
      <CampaignIcon />
    </Button>
  )
}

export default AdvertiseButton
