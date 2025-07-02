import React, { use, useRef } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { loginUser, forgetPassword, googleSignIn } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You are successfully logged in',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(location.state || '/');
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                });
            });
    };

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            return Swal.fire({
                icon: 'warning',
                title: 'Missing Email',
                text: 'Please enter your email first.',
            });
        }

        forgetPassword(email)
            .then(() => {
                Swal.fire({
                    icon: 'info',
                    title: 'Password reset email sent',
                    text: 'Please check your inbox.',
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message,
                });
            });
    };

    const handleGoogle = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in with Google',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(location.state || '/');
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Google Sign-In Failed',
                });
            });
    };

    return (
        <section className="pt-8  min-h-screen bg-base-100 px-4 text-base-content flex items-center justify-center">
            <div className="card w-full max-w-md shadow-md border border-base-300 dark:border-base-content/10 rounded-xl bg-base-100">
                <div className="card-body space-y-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-base-content">
                        Login Now 👋
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="label label-text text-base-content/70">
                                Email
                            </label>
                            <input
                                ref={emailRef}
                                type="email"
                                id="email"
                                name="email"
                                className="input input-bordered w-full"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="label label-text text-base-content/70">
                                Password
                            </label>
                            <input
                                ref={passwordRef}
                                type="password"
                                id="password"
                                name="password"
                                className="input input-bordered w-full"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div
                            onClick={handleForgetPassword}
                            className="text-sm text-right cursor-pointer text-primary hover:underline"
                        >
                            Forgot password?
                        </div>

                        <button type="submit" className="btn btn-primary w-full text-base">
                            Login
                        </button>
                    </form>

                    <div className="divider text-sm text-base-content/60">or</div>

                    <button
                        onClick={handleGoogle}
                        className="btn w-full bg-base-200 border border-base-300 dark:border-base-content/20 hover:bg-base-300 text-base-content"
                    >
                        <FcGoogle className="text-xl mr-2" />
                        Continue with Google
                    </button>

                    <p className="text-sm text-center text-base-content/70">
                        Don’t have an account?{' '}
                        <Link to="/register" className="text-primary font-medium hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
