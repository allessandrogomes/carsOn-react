export default function Input({ value, onChange, placeholder, minLength, maxLength, id, required = false, h5 }) {
    return (
        <div>
            <input
                value={value}
                onChange={onChange}
                className="mb-2 inputAno border border-color1 rounded-full w-24 h-8 font-archivo text-[10px] p-3 outline-none mr-4"
                placeholder={placeholder}
                type="text"
                pattern="\d*"
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