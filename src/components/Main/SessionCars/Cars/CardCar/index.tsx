import PersonIcon from '@mui/icons-material/Person'
import { useNavigate } from 'react-router-dom'
import { formatToBRL } from '../../../../../utils/formatToBRL.ts'
import { IAdvertisement } from '../../../../../interfaces/IAdvertisement.ts'

export default function CardCar({
  image,
  brand,
  model,
  price,
  year,
  km,
  _id,
}: IAdvertisement) {
  const navigate = useNavigate()

  return (
    <div className="carro m-1 mb-10 w-56">
      <div
        className="mb-2 h-32 w-56 rounded-borde-radius-32px bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex h-[250px] text-left">
        <div className="h-50 w-px bg-color3"></div>
        <div className="flex w-full flex-col justify-around">
          <h3 className="mb-1 ml-4 font-archivo text-base font-bold uppercase text-color2">
            {brand} {model} {year}
          </h3>
          <h4 className="mb-1 ml-4 font-big-shoulders-display text-lg font-bold">
            {formatToBRL(price)}
          </h4>
          <div className="mb-3 flex">
            <h4 className="ml-4 mr-6 font-archivo text-sm">
              {year}&#47;{year}
            </h4>
            <h4 className="font-archivo text-sm">{km}km</h4>
          </div>
          <h4 className="mb-4 ml-4 font-archivo text-sm capitalize">
            city - <span className="uppercase">state</span>
          </h4>
          <span className="ml-2 cursor-pointer text-xs text-blue-500 underline">
            <PersonIcon />
            user
          </span>
          <button
            className="ml-4 rounded-borde-radius-32px border border-color3 px-14 py-2 font-archivo font-bold text-color1"
            onClick={() => navigate(`/advertisement?id=${_id}`)}
          >
            Ver anúncio
          </button>
        </div>
      </div>
    </div>
  )
}
