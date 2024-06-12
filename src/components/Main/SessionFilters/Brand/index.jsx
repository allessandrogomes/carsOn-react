import DividingLine from "../shared/DividingLine"
import TitleFilter from "../shared/TitleFilter"
import BrandButton from "./BrandButton"
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const Brand = () => {
    return (
        <div>
            <TitleFilter title="Marca" icon={<LocalOfferOutlinedIcon />}/>
            <div className="flex flex-wrap w-56 justify-between text-center">
                <BrandButton image="icone-chevrolet.svg" alt="Ícone Chevrolet" brandName="chevrolet" />
                <BrandButton image="icone-fiat.svg" alt="Ícone Fiat" brandName="fiat" />
                <BrandButton image="icone-ford.svg" alt="Ícone Ford" brandName="ford" />
                <BrandButton image="icone-honda.svg" alt="Ícone Honda" brandName="honda" />
                <BrandButton image="icone-mitsubishi.svg" alt="Ícone Mitsubishi" brandName="mitsubishi" />
                <BrandButton image="icone-volkswagen.svg" alt="Ícone Volkswagen" brandName="volkswagen" />
                <BrandButton image="icone-toyota.svg" alt="Ícone Toyota" brandName="toyota" />
                <BrandButton image="icone-hyundai.svg" alt="Ícone Hyundai" brandName="hyundai" />
            </div>
            <DividingLine />
        </div>
    )
}

export default Brand