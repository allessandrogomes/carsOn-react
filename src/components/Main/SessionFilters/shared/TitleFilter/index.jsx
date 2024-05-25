const TitleFilter = ({ image, alt, title }) => {
    return (
        <div className="flex pb-4">
            <img className="mr-2" src={`./imagens/Filtros/${image}`} alt={alt} />
            <h4 className="font-archivo text-lg text-color1">{title}</h4>
        </div>
    )
}

export default TitleFilter