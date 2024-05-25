const ColorButton = ({ color, colorName }) => {
    return (
        <div className={`borda filtroCorBtn border-color2 ${color} h-5 w-1/6 mr-7 mb-4 cursor-pointer`}>
            <h5 className="filtroCorBtnValor font-bold  text-color3 capitalize">{colorName}</h5>
        </div>
    )
}

export default ColorButton