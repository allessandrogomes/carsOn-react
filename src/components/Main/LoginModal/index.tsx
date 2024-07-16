import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function LoginModal({ onOpen }: { onOpen: boolean }) {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  React.useEffect(() => {
    if (onOpen) handleOpen()
  }, [onOpen])

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="relative flex max-w-md flex-col rounded-md bg-white p-4 text-black">
            <div className="mb-2 text-center text-2xl font-bold text-[#1e0e4b]">
              Bem vindo de volta ao{' '}
              <span className="text-[#38BCAC]">CarsOn</span>
            </div>
            <div className="mb-4 text-center text-sm font-normal text-[#1e0e4b]">
              Entre em sua conta
            </div>
            <form className="flex flex-col gap-3">
              <div className="relative block">
                <label
                  htmlFor="email"
                  className="mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-900 ring-offset-2 focus:ring-2"
                />
              </div>
              <div className="relative block">
                <label
                  htmlFor="password"
                  className="mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-900 ring-offset-2 focus:ring-2"
                />
              </div>
              <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="text-sm text-[#38BCAC]" href="#">
                  Esqueceu sua senha?
                </a>
              </div>
              <button
                type="submit"
                className="m-auto w-max rounded bg-[#38BCAC] px-6 py-2 text-sm font-normal text-white"
              >
                Entrar
              </button>
            </form>
            <div className="mt-[1.6rem] text-center text-sm">
              Não possui uma conta?{' '}
              <a className="text-sm text-[#38BCAC]" href="/register">
                Crie gratuitamente!
              </a>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
