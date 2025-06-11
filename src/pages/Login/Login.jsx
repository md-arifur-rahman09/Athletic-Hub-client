import React, { useRef, use } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';

const Login = () => {
    const { loginUser, forgetPassword, googleSignIn } = use(AuthContext);
    const navigate = useNavigate();

    // Creating references for email input
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);

        // Login user
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are successfully logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                console.error("Login Error:", error);
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message
                });
            });
    };

    // Forget Password Function
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please enter your email before requesting a password reset.",
            });
            return;
        }

        forgetPassword(email)
            .then(() => {
                Swal.fire({
                    icon: "info",
                    title: "Password Reset Email Sent!",
                    text: "Check your inbox to reset your password.",
                });
            })
            .catch(error => {
                console.error("Forgot Password Error:", error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.message,
                });
            });
    };

    // google signin

    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are successfully logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');

            })
            .catch( error=> {
                console.log(error.message)
            })
    }


    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
            <div className="card-body">
                <h1 className="text-5xl font-bold mb-3">Login now!</h1>

                <form onSubmit={handleSubmit} className='space-y-2'>
                    <label className="label">Email</label>
                    <input type="email" ref={emailRef} className="input" placeholder="Email" required />

                    <label className="label">Password</label>
                    <input type="password" ref={passwordRef} className="input" placeholder="Password" required />

                    <div onClick={handleForgetPassword} className="cursor-pointer text-blue-400 underline">
                        <span>Forgot password?</span>
                    </div>

                    <button className="btn btn-neutral w-full mt-4">Login</button>
                </form>
                {/* Google */}
                <button onClick={handleGoogle} className="btn bg-gray-200 text-black border-[#e5e5e5] mt-2">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>

                <p className='mt-3'>Don't have any account.please <Link to='/register' className='text-blue-400 underline'> register</Link></p>
            </div>

        </div>
    );
};

export default Login;
