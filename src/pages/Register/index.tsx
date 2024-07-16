import Footer from '../../components/Footer'
import FormPersonalData from '../../components/Main/Register/FormRegister'

export default function Register() {
  return (
    <div className="flex flex-col justify-between items-center w-full min-h-[100vh] bg-color2">
      <FormPersonalData />
      <Footer bgColor="bg-color2" />
    </div>
  )
}
