import Input from '~/components/input'
import { Formik , Form} from 'formik';
import Checkboxx from '~/components/checkbox';
import { Link } from 'react-router-dom';
import Button from '~/components/button';
import { LoginSchema } from '~/validations';
import { setUser } from '~/stores/auth/actions';
import { useNavigate } from 'react-router-dom';



function Login() {

    const navigate = useNavigate();

    return (
      <Formik
        initialValues={{
          username: '',
          password: '',
          accept: false,
        }}
        onSubmit={(values) => {
          setUser(values)
          navigate('/')
          console.log(values)
        }}
        validationSchema={LoginSchema}
      >
      <Form className='flex flex-col gap-8'>
          <Input
          name='username' 
          type='email'
          placeholder='Your username or email address'
          />
          <Input
          name='password' 
          type='password'
          placeholder='Password'
          />
          <div className='flex items-center justify-between'>
          <Checkboxx name='accept' label='Remember me' />
          <Link to='/'>Forgot password?</Link>
          </div>
          <Button type='submit'>Sign In</Button>
      </Form>
      </Formik>
    );
  }
  
  export default Login;