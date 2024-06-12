import Input from "../shared/Input";
import TitleFilter from "../shared/TitleFilter";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

export default function Price() {
    return (
        <div>
            <TitleFilter title="Preço" icon={<AttachMoneyOutlinedIcon />}/>
            <div className="flex">
                <Input placeholder="de" h5="ex.: 12.000" maxLength="10" />
                <Input placeholder="ate" h5="ex.: 48.000" maxLength="10" />
            </div>
        </div>
    )
}