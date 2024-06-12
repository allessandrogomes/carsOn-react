import ChipActiveFilter from "./ChipActiveFilter";

export default function ActiveFilters() {
    return (
        <div className="w-[95%] min-h-20 justify-start flex flex-wrap items-center text-color3 p-5 font-archivo rounded-full border bg-color4 gap-2">
            <h3>Filtros:</h3>
            <ChipActiveFilter title="BA"/>
            <ChipActiveFilter title="PRETO"/>
            <ChipActiveFilter title="2018"/>
            <ChipActiveFilter title="2018"/>
            <ChipActiveFilter title="2018"/>
            <ChipActiveFilter title="2018"/>
            <ChipActiveFilter title="2018"/>
            <ChipActiveFilter title="2018"/>
        </div>
    )
}