import DividingLine from "../shared/DividingLine";
import Input from "../shared/Input";
import TitleFilter from "../shared/TitleFilter";


export default function Year() {
    return (
        <div>
            <TitleFilter title="Ano" image="icone-calendario.svg" alt="Ícone Calendário"/>
            <div className="flex">
                <Input h5="ex.: 2010" maxLength="4" placeholder="de"/>
                <Input h5="ex.: 2018" maxLength="4" placeholder="ate"/>
            </div>
            <DividingLine />
        </div>
    )
}