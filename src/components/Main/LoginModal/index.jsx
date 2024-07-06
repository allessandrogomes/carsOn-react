import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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
};

export default function LoginModal({ onOpen }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        if (onOpen) handleOpen()
    }, [onOpen])

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
                        <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Bem vindo de volta ao <span class="text-[#38BCAC]">CarsOn</span></div>
                        <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Entre em sua conta</div>
                        <form class="flex flex-col gap-3">
                            <div class="block relative">
                                <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
                                <input type="text" id="email" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"/>

                            </div>
                            <div class="block relative">
                                <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Senha</label>
                                <input type="text" id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"/>

                            </div>
                            <div>
                                <a class="text-sm text-[#38BCAC]" href="#">Esqueceu sua senha?
                                </a></div>
                            <button type="submit" class="bg-[#38BCAC] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Entrar</button>

                        </form>
                        <div class="text-sm text-center mt-[1.6rem]">Não possui uma conta? <a class="text-sm text-[#38BCAC]" href="/register">Crie gratuitamente!</a></div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
