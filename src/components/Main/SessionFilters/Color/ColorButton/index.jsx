export default function ColorButton({ color, colorName }) {
    return (
        <div id={`filter-color-${colorName}`} className={`${color} h-6 w-14 cursor-pointer rounded flex justify-center items-center`}></div>
    )
}