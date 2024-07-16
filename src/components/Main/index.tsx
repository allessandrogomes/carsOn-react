import { ReactNode } from 'react'

const Main = ({ children }: { children: ReactNode }) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <main className="mt-[112px]">{children}</main>
  )
}

export default Main
