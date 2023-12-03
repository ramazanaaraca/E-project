import Yup from "../yup"

export const OrderSchema = Yup.object().shape({
  firstname:Yup.string().required(),
  email:Yup.string().required().email(),  
  lastname: Yup.string().required(),
  phonenumber: Yup.string().required(),
  streetaddress: Yup.string(),
  country: Yup.string(),
  city: Yup.string(),
  zipcode: Yup.string(),
  expriration: Yup.string(),
  cardnumber: Yup.string(),
  cvc: Yup.string(),
})