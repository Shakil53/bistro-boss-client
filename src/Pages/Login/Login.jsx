import { useContext, useEffect } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContex } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';



const Login = () => {
    // const [disabled, setDisabled] = useState(true)
    const { signIn } = useContext(AuthContex);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";




    //    Captcha validation
    useEffect(() => {
        loadCaptchaEnginge(5);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // SignIn function call 
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // sweet alert
                Swal.fire({
                    title: 'Login Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    // captcha validation
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        // console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            // setDisabled(false);
        }
        else {
            // setDisabled(true)
        }

    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 h-screen bg-loginBg bg-no-repeat">
                <div className="hero-content flex-col lg:flex-row-reverse mr-9">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={loginImg}></img>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-3xl font-bold">Please Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">

                                <LoadCanvasTemplate />
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type the text above" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                {/* <button className="btn btn-primary">Login</button> */}
                                <input className='btn btn-primary text-white' type='submit' value='Login'></input>
                            </div>
                            <div>
                                <p><small className='font-bold'>New here? Create an Account..<Link className=' text-xs badge badge-outline' to='/register'>Sign Up</Link></small></p>
                            </div>
                        </form>

                    </div>
                </div>
            </div >
        </>
    );
};

export default Login;