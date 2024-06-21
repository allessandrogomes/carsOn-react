

const BrandButton = ({ onClick, selected, image, altImage, brandName }) => {
    return (
        <div onClick={onClick} className={`${selected ? 'border-2' : ''} border-color2 filtroMarca h-16 flex flex-col w-12 h-12 mb-4 cursor-pointer`}>
            <img src={`./imagens/Filtros/${image}`} alt={altImage} />
            <h5 className="text-color1 text-[10px] font-archivo capitalize">{brandName}</h5>
        </div>
    )
}

export default BrandButton