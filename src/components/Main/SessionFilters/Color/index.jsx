import DividingLine from "../shared/DividingLine"
import TitleFilter from "../shared/TitleFilter"
import ColorButton from "./ColorButton"


const Color = () => {
    return (
        <div>
            <TitleFilter title="Cor" image="icone-cor.svg" alt="Ícone cor"/>
            <div className="divFiltroCor text-[10px] text-center flex flex-wrap w-80">
                <ColorButton color="bg-slate-100" colorName="branco" />
                <ColorButton color="bg-zinc-950" colorName="preto" />
                <ColorButton color="bg-zinc-700" colorName="cinza" />
                <ColorButton color="bg-red-900" colorName="vermelho" />
                <ColorButton color="bg-green-900" colorName="verde" />
                <ColorButton color="bg-blue-900" colorName="azul" />
            </div>
            <DividingLine />
        </div>
    )
}

export default Color