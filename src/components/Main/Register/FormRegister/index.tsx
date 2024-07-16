import { Button, Paper, TextField } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import * as yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import { useState } from 'react'

interface IUserData {
  name: string
  surname: string
  dateOfBirth: string
  phoneNumber: string
  cep: string
  state: string
  city: string
  street: string
  houseNumber: string
  email: string
  password: string
}

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÿ'`~.\s-]+$/, 'Digite apenas letras')
    .required('O primeiro nome é obrigatório'),
  surname: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÿ'`~.\s-]+$/, 'Digite apenas letras')
    .required('O sobrenome é obrigatório'),
  dateOfBirth: yup
    .string()
    .required('A data de nascimento é obrigatória')
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      'Data de nascimento deve estar no formato DD/MM/AAAA',
    )
    .test(
      'date-complete',
      'Preencha a data completa (DD/MM/AAAA)',
      function (value) {
        if (!value) return false
        const [day, month, year] = value.split('/')
        return day.length === 2 && month.length === 2 && year.length === 4
      },
    )
    .test('age', 'Você deve ter pelo menos 18 anos', function (value) {
      if (!value) return false
      const [day, month, year] = value.split('/')
      const birthDate = new Date(`${year}-${month}-${day}`)
      const today = new Date()
      const age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        return age - 1 >= 18
      }
      return age >= 18
    }),
  phoneNumber: yup
    .string()
    .test('phone-filled', 'Preencha o telefone completo', (value) => {
      if (!value) return false
      return value.replace(/[^\d]/g, '').length === 11 // Considerando apenas os dígitos numéricos
    })
    .required('O número de telefone é obrigatório'),
  cep: yup
    .number()
    .typeError('O CEP deve conter apenas números')
    .required('O CEP é obrigatório')
    .test('len', 'O CEP deve ter exatamente 8 dígitos', function (value) {
      if (value === undefined || value === null) return false
      return value.toString().length === 8
    }),
  state: yup.string().required('Insira um CEP válido'),
  city: yup.string().required('Insira um CEP válido'),
  street: yup
    .string()
    .matches(/^[\w\s\d.,\-\\/()&'`áéíóúâêîôû]+$/i, 'Digite uma rua válida')
    .required('O nome da rua é obrigatório'),
  houseNumber: yup
    .string()
    .matches(/^\d+\s*[a-zA-Z]*$/, 'Digite um número de casa válido')
    .required('O número da casa é obrigatório'),
  email: yup
    .string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!*.?]).{8,}$/,
      'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.',
    )
    .required('A senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'As senhas devem ser iguais')
    .required('A confirmação de senha é obrigatória'),
  acceptTerms: yup
    .boolean()
    .oneOf([true], 'Você deve aceitar os Termos e Condições de uso'),
})

export default function FormPersonalData() {
  const [emailExistsMsg, setEmailExistsMsg] = useState('')

  async function checkEmailAlreadyExists(email: string) {
    const response = await fetch('https://localhost:3001/user/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    const data = await response.json()
    if (data.exists) {
      setEmailExistsMsg('Email já cadastrado')
    } else {
      setEmailExistsMsg('')
    }
  }

  function resolveEmail(event: React.FocusEvent<HTMLInputElement>) {
    formik.handleBlur(event)
    checkEmailAlreadyExists(formik.values.email)
  }

  async function registerUser(userValues: IUserData) {
    try {
      await fetch('https://localhost:3001/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userValues),
      })
    } catch (err) {
      console.log(err)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      dateOfBirth: '',
      phoneNumber: '',
      cep: '',
      state: '',
      city: '',
      street: '',
      houseNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (!emailExistsMsg) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { confirmPassword, acceptTerms, ...userValues } = values
        registerUser(userValues)
      }
    },
  })

  function resolveFieldCEP(event: React.FocusEvent<HTMLInputElement>) {
    formik.handleBlur(event)

    async function getDataCEP() {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${formik.values.cep}/json/`,
        )
        const data = await response.json()

        if (data.erro) {
          formik.setFieldError('cep', 'CEP não encontrado')
          return
        }

        formik.setFieldValue('state', data.uf)
        formik.setFieldValue('city', data.localidade)
        formik.setFieldValue('street', data.logradouro)
      } catch (err) {
        console.log('Não foi possível buscar os dados do CEP', err)
      }
    }
    getDataCEP()
  }

  return (
    <Paper
      elevation={24}
      className="flex flex-col border-2 border-color1 p-10 w-[80%] max-w-[850px] mx-6 my-[80px]"
    >
      <div className="flex flex-col gap-4 w-[80%] max-w-[750px] mb-6">
        <button
          className="mt-2 self-start"
          onClick={() => (window.location.href = '/')}
        >
          <ArrowBackIcon /> Voltar
        </button>
        <h1 className="font-bold text-4xl">
          Crie sua conta na <span className="text-color2">CarsOn</span>
        </h1>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-6 justify-center items-center mb-6"
      >
        <h1 className="font-bold self-start">Dados pessoais</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <TextField
            className="w-[230px] h-[80px]"
            id="name"
            name="name"
            label="Nome"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            className="w-[230px] h-[80px]"
            id="surname"
            name="surname"
            label="Sobrenome"
            variant="outlined"
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />
          <InputMask
            mask="99/99/9999"
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <TextField
              className="w-[230px] h-[80px]"
              id="dateOfBirth"
              name="dateOfBirth"
              label="Data de nascimento"
              variant="outlined"
              error={
                formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
              }
              helperText={
                formik.touched.dateOfBirth && formik.errors.dateOfBirth
              }
            />
          </InputMask>
          <InputMask
            mask="(99) 99999-9999"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <TextField
              className="w-[230px] h-[80px]"
              id="phoneNumber"
              name="phoneNumber"
              label="Telefone"
              placeholder="(XX) XXXXX-XXXX"
              variant="outlined"
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
          </InputMask>
          <TextField
            inputProps={{ maxLength: 8 }}
            className="w-[230px] h-[80px]"
            id="cep"
            name="cep"
            label="CEP (Apenas números)"
            placeholder="ex: 44555670"
            variant="outlined"
            value={formik.values.cep}
            onChange={formik.handleChange}
            onBlur={resolveFieldCEP}
            error={formik.touched.cep && Boolean(formik.errors.cep)}
            helperText={formik.touched.cep && formik.errors.cep}
          />
          <TextField
            className="w-[230px] h-[80px]"
            id="state"
            name="state"
            label="Estado"
            variant="outlined"
            disabled
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
          />
          <TextField
            className="w-[230px] h-[80px]"
            id="city"
            name="city"
            label="Cidade"
            variant="outlined"
            disabled
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
          <TextField
            className="w-[230px] h-[80px]"
            id="street"
            name="street"
            label="Rua"
            variant="outlined"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.street && Boolean(formik.errors.street)}
            helperText={formik.touched.street && formik.errors.street}
          />
          <TextField
            inputProps={{ maxLength: 10 }}
            className="w-[230px] h-[80px]"
            id="houseNumber"
            name="houseNumber"
            label="Número"
            variant="outlined"
            value={formik.values.houseNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.houseNumber && Boolean(formik.errors.houseNumber)
            }
            helperText={formik.touched.houseNumber && formik.errors.houseNumber}
          />
        </div>
        <h1 className="font-bold mb-6 self-start">Dados de acesso</h1>
        <div className="flex flex-wrap gap-4 justify-center mb-20">
          <TextField
            className="w-[230px] h-[80px]"
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={resolveEmail}
            error={
              (formik.touched.email && Boolean(formik.errors.email)) ||
              Boolean(emailExistsMsg)
            }
            helperText={
              (formik.touched.email && formik.errors.email) || emailExistsMsg
            }
            type="email"
          />
          <TextField
            className="w-[230px] h-[80px]"
            id="password"
            name="password"
            label="Senha"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            type="password"
          />
          <TextField
            className="w-[230px] h-[80px]"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirmar senha"
            variant="outlined"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            type="password"
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-2">
            <input
              id="check-terms"
              name="acceptTerms"
              type="checkbox"
              checked={formik.values.acceptTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="check-terms">
              Aceito os Termos e Condições de uso
            </label>
          </div>
          {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
            <div className="text-red-600">{formik.errors.acceptTerms}</div>
          ) : null}
        </div>
        <Button
          type="submit"
          sx={{
            backgroundColor: '#38BCAC',
            '&:hover': { backgroundColor: '#2d9488' },
          }}
          className="w-[max-content] self-end"
          variant="contained"
        >
          Continuar <ChevronRightIcon />
        </Button>
      </form>
    </Paper>
  )
}
