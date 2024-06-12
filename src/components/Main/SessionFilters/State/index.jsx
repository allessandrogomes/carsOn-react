import DividingLine from "../shared/DividingLine";
import TitleFilter from "../shared/TitleFilter";
import StateButton from "./BotaoEstado";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

export default function State() {
    return (
        <div>
            <TitleFilter icon={<LocationOnOutlinedIcon />} title="Estado" />
            <div className="flex flex-wrap w-72">
                <StateButton states={states} />
            </div>
            <DividingLine />
        </div>
    )
}