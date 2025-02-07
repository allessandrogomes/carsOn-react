import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function WarningModal() {
  const [open, setOpen] = React.useState(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Projeto em Desenvolvimento &#128679;
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Atualmente este projeto está em Desenvolvimento, portanto, algumas
            funcionalidades podem ainda não funcionar ou conter bugs.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
