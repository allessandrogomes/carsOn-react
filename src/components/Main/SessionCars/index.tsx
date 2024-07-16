import ActiveFilters from './ActiveFilters'
import Cars from './Cars'

export default function SessionCars() {
  return (
    <section className="w-full m-6 flex flex-col gap-8">
      <ActiveFilters />
      <Cars />
    </section>
  )
}
