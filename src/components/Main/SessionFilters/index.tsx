import Brand from './Brand'
import Color from './Color'
import Price from './Price'
import State from './State'
import Year from './Year'

export default function SessionFilters() {
  return (
    <div className="flex flex-col m-6">
      <State />
      <Color />
      <Brand />
      <Year />
      <Price />
    </div>
  )
}
