import Input from '~/components/input'
import { Formik , Form} from 'formik';
import Checkboxx from '~/components/checkbox';
import Button from '~/components/button';
import { RegisterSchema } from '~/validations';


function Register() {
    return (
      <Formik
        initialValues={{
          email:'',  
          name:'',  
          username: '',
          password: '',
          accept: false,
        }}
        onSubmit={(values) => {
          console.log(values);
          
        }}
        validationSchema={RegisterSchema}
      >
      <Form className='flex flex-col gap-8'>
          <Input
          name='name' 
          type='text'
          placeholder='Your Name'
          />
          <Input
          name='username' 
          type='text'
          placeholder='Username'
          />
          <Input
          name='email' 
          type='email'
          placeholder='Email'
          />
          <Input
          name='password' 
          type='password'
          placeholder='Password'
          />
          <div className='flex items-center justify-between'>
          <Checkboxx name='accept' label='I agree with Privacy Policy and Terms of Use' />
          </div>
          <Button type='submit'>Sign In</Button>
      </Form>
      </Formik>
    );
  }
  
  export default Register;