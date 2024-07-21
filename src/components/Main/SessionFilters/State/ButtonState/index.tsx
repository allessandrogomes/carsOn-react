interface IStateButton {
  uf: string
  selected: boolean
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const StateButton = ({ uf, selected, onClick }: IStateButton) => {
  return (
    <div
      onClick={onClick}
      className={`${selected ? 'border-2' : ''} btnEstado mb-1 mr-1 flex h-9 w-9 cursor-pointer items-center justify-center border-color2 text-center`}
    >
      <h5 className="btnEstadoValor w-full font-archivo uppercase text-zinc-400">
        {uf}
      </h5>
    </div>
  )
}

export default StateButton
