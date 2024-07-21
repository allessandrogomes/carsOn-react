import Brand from './Brand'
import Color from './Color'
import Price from './Price'
import State from './State'
import Year from './Year'

export default function SessionFilters() {
  return (
    <div className="m-6 flex flex-col">
      <State />
      <Color />
      <Brand />
      <Year />
      <Price />
    </div>
  )
}
