interface IColorButton {
  color: string
  onClick: React.MouseEventHandler<HTMLDivElement>
  selected: boolean
}

export default function ColorButton({
  color,
  onClick,
  selected,
}: IColorButton) {
  return (
    <div
      onClick={onClick}
      className={`${color} ${selected ? 'border-2' : ''} border-color2 h-6 w-14 cursor-pointer rounded flex justify-center items-center`}
    ></div>
  )
}
