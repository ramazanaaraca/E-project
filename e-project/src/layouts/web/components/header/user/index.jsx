import { Link } from 'react-router-dom'
import Usersvg from '~/assets/user.svg'
import  PropTypes  from "prop-types";


function User({to}) {
  return (
    <>
        <Link to={to}>
          <img src={Usersvg} alt="user" width={24} height={24} />
        </Link>
    </>
  )
}

User.propTypes = {
  to: PropTypes.string
}

export default User