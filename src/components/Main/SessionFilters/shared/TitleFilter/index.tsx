import { ReactElement } from 'react'

interface ITitleFilter {
  icon: ReactElement
  title: string
}

const TitleFilter = ({ icon, title }: ITitleFilter) => {
  return (
    <div className="flex pb-4 gap-1">
      {icon}
      <h4 className="font-archivo text-lg text-color1">{title}</h4>
    </div>
  )
}

export default TitleFilter
