import Footer from '../../components/Footer'
import FormPersonalData from '../../components/Main/Register/FormRegister'

export default function Register() {
  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-between bg-color2">
      <FormPersonalData />
      <Footer bgColor="bg-color2" />
    </div>
  )
}
