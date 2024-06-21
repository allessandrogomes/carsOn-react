import { useSearchParams } from "react-router-dom";
import DividingLine from "../shared/DividingLine"
import TitleFilter from "../shared/TitleFilter"
import BrandButton from "./BrandButton"
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { useEffect, useState } from "react";

const brands = [
    {
        image: "icone-chevrolet.svg",
        alt: "Ícone Chevrolet",
        brandName: "chevrolet"
    },
    {
        image: "icone-fiat.svg",
        alt: "Ícone Fiat",
        brandName: "fiat"
    },
    {
        image: "icone-ford.svg",
        alt: "Ícone Ford",
        brandName: "ford"
    },
    {
        image: "icone-honda.svg",
        alt: "Ícone Honda",
        brandName: "honda"
    },
    {
        image: "icone-mitsubishi.svg",
        alt: "Ícone Mitsubishi",
        brandName: "mitsubishi"
    },
    {
        image: "icone-volkswagen.svg",
        alt: "Ícone Volkswagen",
        brandName: "volkswagen"
    },
    {
        image: "icone-toyota.svg",
        alt: "Ícone Toyota",
        brandName: "toyota"
    },
    {
        image: "icone-hyundai.svg",
        alt: "Ícone Hyundai",
        brandName: "hyundai"
    },
]

const Brand = () => {

    const [params, setParams] = useSearchParams()
    const [selected, setSelected] = useState([])

    function resolveBrandFilter(brand) {
        if (params.get("brand")) {
            if (params.get("brand").split(',').includes(brand)) {
                setParams(prevParams => {
                    const newParams = new URLSearchParams(prevParams)
                    const currentBrands = newParams.get('brand')
                    if (currentBrands) {
                        const brandsArray = currentBrands.split(',').map(term => term.trim()).filter(term => term !== brand);

                        if (brandsArray.length > 0) {
                            newParams.set('brand', brandsArray.join(','))
                        } else {
                            newParams.delete('brand')
                        }
                        newParams.set("page", 1)
                        return newParams
                    }
                })
            } else {
                setParams(prevParams => {
                    const newParams = new URLSearchParams(prevParams)
                    const currentBrands = newParams.get('brand')
                    if (currentBrands) {
                        newParams.set('brand', `${currentBrands},${brand}`)
                    } else {
                        newParams.set('brand', brand)
                    }
                    newParams.set("page", 1)
                    return newParams
                })
            }
        } else {
            setParams(prevParams => {
                const newParams = new URLSearchParams(prevParams)
                newParams.set("brand", brand)
                newParams.set("page", 1)
                return newParams
            })
        }
    }

    useEffect(() => {
        if (params.get("brand")) {
            const arrayParamsBrands = params.get("brand").split(',')
            setSelected(arrayParamsBrands)
        } else {
            setSelected([])
        }
    }, [params])

    return (
        <div>
            <TitleFilter title="Marca" icon={<LocalOfferOutlinedIcon />} />
            <div className="flex flex-wrap w-56 justify-between text-center">
                {brands.map(item => (<BrandButton onClick={() => resolveBrandFilter(item.brandName)} selected={selected.includes(item.brandName)} key={item.brandName} {...item} />))}
            </div>
            <DividingLine />
        </div>
    )
}

export default Brand