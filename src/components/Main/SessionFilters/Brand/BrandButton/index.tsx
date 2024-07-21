interface IBrandButton {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
  selected: boolean
  image: string
  altImage: string
  brandName: string
}

const BrandButton = ({
  onClick,
  selected,
  image,
  altImage,
  brandName,
}: IBrandButton) => {
  return (
    <div
      onClick={onClick}
      className={`${selected ? 'border-2' : ''} filtroMarca mb-4 flex h-12 h-16 w-12 cursor-pointer flex-col border-color2`}
    >
      <img src={`./imagens/Filtros/${image}`} alt={altImage} />
      <h5 className="font-archivo text-[10px] capitalize text-color1">
        {brandName}
      </h5>
    </div>
  )
}

export default BrandButton
