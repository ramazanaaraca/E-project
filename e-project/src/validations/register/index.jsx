import Yup from "../yup"

export const RegisterSchema = Yup.object().shape({
  name:Yup.string().required(),
  email:Yup.string().required().email(),  
  username: Yup.string().required(),
  password: Yup.string().required(),
  accept: Yup.string()
})