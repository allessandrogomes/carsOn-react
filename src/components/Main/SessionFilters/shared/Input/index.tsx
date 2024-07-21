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
        className="inputAno mb-2 mr-4 h-8 w-24 rounded-full border border-color1 p-3 font-archivo text-[10px] outline-none"
        placeholder={placeholder}
        type="text"
        minLength={minLength}
        maxLength={maxLength}
        id={id}
        inputMode="numeric"
        required={required}
      />
      <h5 className="text-left font-archivo text-[10px] text-color1">{h5}</h5>
    </div>
  )
}
