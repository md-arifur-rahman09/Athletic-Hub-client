import React, { use, useRef } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../authContext/AuthContext';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { useTitle } from '../../hooks/usetitle';

const Register = () => {
    const { createUser, profileUpdate, googleSignIn } = use(AuthContext);
    const navigate = useNavigate();
    useTitle("Register")

    const nameRef = useRef(null);
    const photoRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const displayName = nameRef.current.value;
        const photoURL = photoRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const info = { displayName, photoURL };

        createUser(email, password)
            .then(() => {
                profileUpdate(info).catch(() => { });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You are successfully registered',
                    showConfirmButton: false,
                    timer: 2500
                });
                e.target.reset();
                navigate('/');
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: 'Something went wrong. Try again later.',
                });
            });
    };

    const handleGoogle = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You are successfully logged in',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Google Sign-In Failed',
                });
            });
    };

    return (
        <section className=" min-h-screen bg-base-100 text-base-content px-4 py-10 flex items-center justify-center overflow-hidden ">

           <div className="card w-full max-w-md shadow-md border border-base-300 dark:border-base-content/20 rounded-xl bg-base-100">
                <div className="card-body space-y-5 ">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-base-content">Register Now</h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="label label-text text-base-content/70">Full Name</label>
                            <input
                                ref={nameRef}
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        <div>
                            <label className="label label-text text-base-content/70">Photo URL</label>
                            <input
                                ref={photoRef}
                                type="url"
                                className="input input-bordered w-full"
                                placeholder="https://example.com/avatar.jpg"
                                required
                            />
                        </div>

                        <div>
                            <label className="label label-text text-base-content/70">Email</label>
                            <input
                                ref={emailRef}
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="label label-text text-base-content/70">Password</label>
                            <input
                                ref={passwordRef}
                                type="password"
                                className="input input-bordered w-full"
                                placeholder="••••••••"
                                pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                                title="Must include one uppercase, one lowercase, and 6+ characters"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-full mt-2 text-base">
                            Register
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
                        Already have an account?{' '}
                        <Link to="/login" className="text-primary font-medium hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Register;
