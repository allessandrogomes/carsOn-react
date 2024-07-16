import { formatToBRL } from '../../../../../utils/formatToBRL'

interface IInput {
  value: number | string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  placeholder: string
  minLength?: number
  maxLength?: number
  id?: string
  required?: boolean
  h5: string
  typeInputPrice?: boolean
}

export default function Input({
  value,
  onChange,
  placeholder,
  minLength,
  maxLength,
  id,
  required = false,
  h5,
  typeInputPrice = false,
}: IInput) {
  return (
    <div>
      <input
        value={typeInputPrice ? formatToBRL(Number(value) / 100) : value}
        onChange={onChange}
        className="mb-2 inputAno border border-color1 rounded-full w-24 h-8 font-archivo text-[10px] p-3 outline-none mr-4"
        placeholder={placeholder}
        type="text"
        minLength={minLength}
        maxLength={maxLength}
        id={id}
        inputMode="numeric"
        required={required}
      />
      <h5 className="text-left text-[10px] text-color1 font-archivo">{h5}</h5>
    </div>
  )
}
