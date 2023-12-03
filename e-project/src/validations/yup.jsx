import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: 'You need to fill in this field.'
  },
  string: {
    email: 'Enter a valid email address.',
    min: 'This field must be a minimum of ${min} characters.',
    max: 'This field must have a maximum of ${max} characters.',
    url: 'You must enter a valid URL.'
  },
  boolean: {
    oneOf: 'You need to mark this field.'
  }
})

export default Yup