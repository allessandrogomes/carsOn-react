import { useSearchParams } from 'react-router-dom'
import DividingLine from '../shared/DividingLine'
import TitleFilter from '../shared/TitleFilter'
import ColorButton from './ColorButton'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'
import { useEffect, useState } from 'react'

interface IColor {
  color: string
  colorName: string
}

const colors: IColor[] = [
  {
    color: 'bg-slate-100',
    colorName: 'branco',
  },
  {
    color: 'bg-zinc-950',
    colorName: 'preto',
  },
  {
    color: 'bg-zinc-700',
    colorName: 'cinza',
  },
  {
    color: 'bg-red-900',
    colorName: 'vermelho',
  },
  {
    color: 'bg-green-900',
    colorName: 'verde',
  },
  {
    color: 'bg-blue-900',
    colorName: 'azul',
  },
  {
    color: 'bg-yellow-400',
    colorName: 'amarelo',
  },
]

export default function Color() {
  const [params, setParams] = useSearchParams()
  const [selected, setSelected] = useState<string[]>([])

  function resolveColorFilter(color: string) {
    if (params.get('color')) {
      if (params.get('color')!.split(',').includes(color)) {
        setParams((prevParams) => {
          const newParams = new URLSearchParams(prevParams)
          const currentColors = newParams.get('color')
          if (currentColors) {
            const colorsArray = currentColors
              .split(',')
              .map((term) => term.trim())
              .filter((term) => term !== color)

            if (colorsArray.length > 0) {
              newParams.set('color', colorsArray.join(','))
            } else {
              newParams.delete('color')
            }
          }
          newParams.set('page', '1')
          return newParams
        })
      } else {
        setParams((prevParams) => {
          const newParams = new URLSearchParams(prevParams)
          const currentColors = newParams.get('color')
          if (currentColors) {
            newParams.set('color', `${currentColors},${color}`)
          } else {
            newParams.set('color', color)
          }
          newParams.set('page', '1')
          return newParams
        })
      }
    } else {
      setParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams)
        newParams.set('color', color)
        newParams.set('page', '1')
        return newParams
      })
    }
  }

  useEffect(() => {
    if (params.get('color')) {
      const arrayParamsColors = params.get('color')!.split(',')
      setSelected(arrayParamsColors)
    } else {
      setSelected([])
    }
  }, [params])

  return (
    <div>
      <TitleFilter title="Cor" icon={<ColorLensOutlinedIcon />} />
      <div className="text-[10px] flex flex-wrap w-[300px] gap-2">
        {colors.map((item) => (
          <ColorButton
            onClick={() => resolveColorFilter(item.colorName.toLowerCase())}
            selected={selected.includes(item.colorName)}
            key={item.colorName}
            {...item}
          />
        ))}
      </div>
      <DividingLine />
    </div>
  )
}
