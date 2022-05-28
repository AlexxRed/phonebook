import { Greetings } from '../../components/Greetings/Greetings';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { refs } from "../../services/refs";
import  authSelectors  from '../../redux/auth/authSelectors';

function HomePage() {
    const isLogin = useSelector(authSelectors.getIsLoggedIn);
    return (
        <>
            {isLogin ? <p>Welcome, you are logged in with your account. Thank you for using our application.</p>
                :
            <>
                <Greetings />
                <Link to={refs.loginPage}>Please go to login</Link>
                <p>If you don't have an account</p>
                <Link to={refs.registerPage}>Please go to Register</Link>
            </>
            }
        </>
    )
};

export default HomePage;
