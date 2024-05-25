import CardCar from "./CardCar";

const carTest = {
    image: "https://i.ibb.co/tmFS4Br/chevrolet-onix.webp",
    name: "Chevrolet Onix",
    price: "82490",
    year: "2023",
    km: "8690",
    city: "Campinas",
    state: "SP",
}

export default function Cars() {
    return (
        <section className="flex justify-start flex-wrap gap-8">
            <CardCar {...carTest}/>
            <CardCar {...carTest}/>
            <CardCar {...carTest}/>
            <CardCar {...carTest}/>
            <CardCar {...carTest}/>
            <CardCar {...carTest}/>
            <CardCar {...carTest}/>
            <CardCar {...carTest}/>
        </section>
    )
}