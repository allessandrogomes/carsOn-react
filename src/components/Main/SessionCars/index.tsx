import ActiveFilters from './ActiveFilters'
import Cars from './Cars'

export default function SessionCars() {
  return (
    <section className="m-6 flex w-full flex-col gap-8">
      <ActiveFilters />
      <Cars />
    </section>
  )
}
