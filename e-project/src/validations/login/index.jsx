import Yup from "../yup"

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
  accept: Yup.string()
})