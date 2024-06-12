import DividingLine from "../shared/DividingLine"
import TitleFilter from "../shared/TitleFilter"
import ColorButton from "./ColorButton"
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

const colors = [
    {
        color: "bg-slate-100",
        colorName: "branco"
    },
    {
        color: "bg-zinc-950",
        colorName: "preto"
    },
    {
        color: "bg-zinc-700",
        colorName: "cinza"
    },
    {
        color: "bg-red-900",
        colorName: "vermelho"
    },
    {
        color: "bg-green-900",
        colorName: "verde"
    },
    {
        color: "bg-blue-900",
        colorName: "azul"
    },
    {
        color: "bg-yellow-400",
        colorName: "amarelo"
    },
]

export default function Color() {
    return (
        <div>
            <TitleFilter title="Cor" icon={<ColorLensOutlinedIcon />} />
            <div className="text-[10px] flex flex-wrap w-[300px] gap-2">
                {colors.map(item => (
                    <ColorButton key={item.colorName} {...item}/>
                ))}
            </div>
            <DividingLine />
        </div>
    )
}