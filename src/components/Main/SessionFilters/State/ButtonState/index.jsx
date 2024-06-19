const StateButton = ({ uf, selected, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`${selected ? "border-2" : ''} btnEstado border-color2 flex justify-center items-center text-center mr-1 mb-1 w-9 h-9 cursor-pointer`}>
            <h5 className="btnEstadoValor w-full text-zinc-400 uppercase font-archivo">{uf}</h5>
        </div>
    )
}

export default StateButton