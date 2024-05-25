import DividingLine from "../shared/DividingLine";
import TitleFilter from "../shared/TitleFilter";
import StateButton from "./BotaoEstado";

const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];


const State = () => {
    return (
        <div>
            <TitleFilter image="icone-localizacao.svg" alt="Ícone localização do estado" title="Estado" />
            <div className="flex flex-wrap w-72">
                <StateButton states={states} />
            </div>
            <DividingLine />
        </div>
    )
}

export default State