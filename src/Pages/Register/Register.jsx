import { Link } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'





const Register = () => {




    const handleSignUp = () => {

    }


    return (
        <div className="hero min-h-screen bg-base-200 h-screen 
        bg-loginBg bg-no-repeat">
            <div className="hero-content flex-col lg:flex-row mr-9">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={loginImg}></img>
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl font-bold">Please Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" />
                        </div>
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

                        {/* captcha
                        <div className="form-control">

                            <LoadCanvasTemplate />
                            <input ref={captchaRef} type="password" name='password' placeholder="type the text above" className="input input-bordered" />
                        </div>
                        <div>
                            <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs">Validate</button>
                        </div> */}

                        <div className="form-control mt-6">
                            {/* <button className="btn btn-primary">Login</button> */}
                            <input className='btn btn-primary text-white' type='submit' value='Submit'></input>
                        </div>
                        <div>
                            <p><small className='font-bold'>Already have an Account?..<Link className=' text-xs badge badge-outline' to='/login'>Sign In</Link></small></p>
                        </div>
                    </form>

                </div>
            </div>
        </div >
    );
};

export default Register;