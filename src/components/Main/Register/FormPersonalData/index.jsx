import { Box, Button, Paper, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as yup from 'yup';
import { useFormik } from "formik";
import InputMask from 'react-input-mask';

const validationSchema = yup.object({
    name: yup
        .string()
        .matches(/^[a-zA-ZÀ-ÿ'`~.\s-]+$/, 'Digite apenas letras')
        .required('O primeiro nome é obrigatório'),
    surname: yup
        .string('Digite seu sobrenome')
        .matches(/^[a-zA-ZÀ-ÿ'`~.\s-]+$/, 'Digite apenas letras')
        .required('O sobrenome é obrigatório'),
    dateOfBirth: yup
        .string('Digite sua data de nascimento')
        .required('A data de nascimento é obrigatória')
        .matches(
            /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
            'Data de nascimento deve estar no formato DD/MM/AAAA'
        )
        .test('date-complete', 'Preencha a data completa (DD/MM/AAAA)', value => {
            if (!value) return false;
            const [day, month, year] = value.split('/');
            return day && month && year && day.length === 2 && month.length === 2 && year.length === 4;
        })
        .test('age', 'Você deve ter pelo menos 18 anos', function (value) {
            if (!value) return false;
            const [day, month, year] = value.split('/');
            const birthDate = new Date(`${year}-${month}-${day}`);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                return age - 1 >= 18;
            }
            return age >= 18;
        }),
    phoneNumber: yup
        .string('Digite seu número de telefone')
        .test('phone-filled', 'Preencha o telefone completo', value => {
            if (!value) return false;
            return value.replace(/[^\d]/g, '').length === 11; // Considerando apenas os dígitos numéricos
        })
        .required('O número de telefone é obrigatório'),
    cep: yup.number().typeError('O CEP deve conter apenas números').required('O CEP é obrigatório').test('len', 'O CEP deve ter exatamente 8 dígitos', val => val && val.toString().length === 8),
    street: yup
        .string('Digite o nome da sua rua')
        .matches(/^[\w\s\d.,\-\\/()&'`]+$/i, 'Digite uma rua válida')
        .required('O nome da rua é obrigatório'),
    houseNumber: yup
        .number('Digite o número da casa')
        .typeError('Digite apenas números')
        .required('O número da casa é obrigatório')
})

export default function FormPersonalData() {

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
            houseNumber: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <Paper elevation={24} className="flex justify-self-center flex-col border-2 border-color1 p-10 w-[80%] max-w-[850px] mx-6 my-[80px]">
            <div className="flex flex-col justify-center gap-4 w-[80%] max-w-[750px] mb-6">
                <button className="mt-2 self-start" onClick={() => window.location.href = "/"}><ArrowBackIcon /> Voltar</button>
                <h1 className="font-bold text-4xl">Crie sua conta na <span className="text-color2">CarsOn</span></h1>
            </div>
            <h1 className="font-bold mb-6">Dados pessoais</h1>
            <form onSubmit={formik.handleSubmit} className="flex flex-wrap gap-4 justify-center items-center mb-6">
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
                    {() => (
                        <TextField
                            className="w-[230px] h-[80px]"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            label="Data de nascimento"
                            variant="outlined"
                            error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                            helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                        />
                    )}
                </InputMask>
                <InputMask
                    mask="(99) 99999-9999"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    {() => (
                        <TextField
                            className="w-[230px] h-[80px]"
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Telefone"
                            placeholder="(XX) XXXXX-XXXX"
                            variant="outlined"
                            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        />
                    )}
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
                    onBlur={formik.handleBlur}
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
                    inputProps={{ maxLength: 6 }}
                    className="w-[230px] h-[80px]"
                    id="houseNumber"
                    name="houseNumber"
                    label="Número"
                    variant="outlined"
                    value={formik.values.houseNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.houseNumber && Boolean(formik.errors.houseNumber)}
                    helperText={formik.touched.houseNumber && formik.errors.houseNumber}
                />
                <Button
                    type="submit"
                    sx={{ backgroundColor: "#38BCAC", '&:hover': { backgroundColor: '#2d9488' } }}
                    className="w-[max-content] self-end"
                    variant="contained"
                >
                    Continuar <ChevronRightIcon />
                </Button>
            </form>
        </Paper>
    )
}