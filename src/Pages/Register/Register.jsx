import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';



const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContex)
    const navigate = useNavigate();

    // RHF
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)

                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Create Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
            })


    }

    // console.log(watch("example"))

    // const handleSignUp = () => {

    // }


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 h-screen bg-loginBg bg-no-repeat">
                <div className="hero-content flex-col lg:flex-row mr-9">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={loginImg}></img>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-3xl font-bold">Please Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />

                                {/* name field is required error message */}
                                {errors.name && <span><small className='text-red-500'>name field is required</small></span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="name" {...register("photoURL", { required: true })} placeholder="photo url" className="input input-bordered" />

                                {/* name field is required error message */}
                                {errors.photoURL && <span><small className='text-red-500'>Photo Url is Required</small></span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} name='email' required placeholder="email" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.]))/

                                })} required name='password' placeholder="password" className="input input-bordered" />

                                {/* password length error message */}
                                {errors.password?.type === 'minLength' && <span><small className='text-red-500'>password must be 6 characters</small></span>}
                                {errors.password?.type === 'maxLength' && <span><small className='text-red-500'>password must be less then 20 characters</small></span>}
                                {errors.password?.type === 'pattern' && <span><small className='text-red-500'>password must have one uppercase, one lower case and one special character</small></span>}
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
        </>
    );
};

export default Register;