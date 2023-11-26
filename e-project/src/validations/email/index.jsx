import Yup from "../yup"

export const emailSchema = Yup.object().shape({
  email: Yup.string().email(),
})