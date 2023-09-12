import { useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';



const Login = () => {
    const captchaRef = useRef();
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(5);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }

    }

    return (
        <div className="hero min-h-screen bg-base-200 h-screen 
        bg-loginBg bg-no-repeat">
            <div className="hero-content flex-col lg:flex-row mr-9">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={loginImg}></img>
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Please Login</h1>
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
                            <input ref={captchaRef} type="password" name='password' placeholder="type the text above" className="input input-bordered" />
                        </div>
                        <div>
                            <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs">Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn btn-primary">Login</button> */}
                            <input className='btn btn-primary text-white' disabled={disabled} type='submit' value='Login'></input>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Login;