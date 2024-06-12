import PersonIcon from '@mui/icons-material/Person';

export default function CardCar({ image, brand, model, price, year, km, city, state, nameUser }) {
    return (
        <div className="carro w-56 m-1 mb-10">
            <div className="mb-2 rounded-borde-radius-32px w-56 h-32 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="flex text-left">
                <div className="w-px h-50 bg-color3"></div>
                <div>
                    <h3 className="nomeCarro ml-4 uppercase mb-1 text-base font-archivo font-bold text-color2">{brand} {model} {year}</h3>
                    <h4 className="ml-4 mb-1 text-lg font-bold font-big-shoulders-display">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</h4>
                    <div className="flex mb-3">
                        <h4 className="ml-4 mr-6 font-archivo text-sm">{year}&#47;{year}</h4>
                        <h4 className="font-archivo text-sm">{km}km</h4>
                    </div>
                    <h4 className="ml-4 mb-4 font-archivo text-sm capitalize">{city} - <span className="estadoCarro uppercase">{state}</span></h4>
                    <span className="underline cursor-pointer ml-2 text-xs text-blue-500"><PersonIcon />{nameUser}</span>
                    <button
                        className="text-color1 font-bold font-archivo ml-4 px-14 py-2 rounded-borde-radius-32px border border-color3">Comprar</button>
                </div>
            </div>
        </div>
    )
}