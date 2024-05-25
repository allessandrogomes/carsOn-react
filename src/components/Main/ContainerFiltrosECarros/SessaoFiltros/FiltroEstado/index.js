import BotaoEstado from "./BotaoEstado"
import TituloFiltro from "../TituloFiltro"

const FiltroEstado = (props) => {
    const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    return (
        <div>
            <TituloFiltro imagem="icone-localizacao.svg" alt="Ícone localização do estado" tituloFiltro="Escolha o seu Estado"/>
            <div className="flex flex-wrap w-72">
                <BotaoEstado onClick={props.onClick} itens={estados}/>
            </div>
            <div className="h-px w-width-300px bg-zinc-300 my-5"></div>
        </div>
    )
}

export default FiltroEstado