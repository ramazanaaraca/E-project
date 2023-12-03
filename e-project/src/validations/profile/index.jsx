import Yup from "../yup"

export const ProfileSchema = Yup.object().shape({
  firstname:Yup.string().required(),
  email:Yup.string().required().email(),  
  lastname: Yup.string().required(),
  displayname: Yup.string().required(),
  oldpassword: Yup.string(),
  newpassword: Yup.string(),
  repeatnewpassword: Yup.string()
})