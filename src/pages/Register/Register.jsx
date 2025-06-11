import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../authContext/AuthContext';
import Swal from 'sweetalert2';

const Logout = () => {

    const { createUser, user, profileUpdate, googleSignIn } = use(AuthContext);
    const navigate = useNavigate();

    console.log(user)
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const info = { displayName, photoURL }
        //  create User 
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                // update profile
                profileUpdate(info)
                    .then(() => { })
                    .catch(error => console.log(error))


                //success  alert 
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are sccessfully registered",
                    showConfirmButton: false,
                    timer: 2500
                });
                e.target.reset();
                navigate('/');

            })
            .catch(error => console.log(error))

    }
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
            .catch(error => {
                console.log(error.message)
            })
    }


    return (


        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Register Now! </h1>
                <form onSubmit={handleSubmit} className="fieldset">

                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />

                    <label className="label">PhotoURL</label>
                    <input type="url" name='photo' className="input" placeholder="PhotoURL" />

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Password"
                        title="Password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long."
                        pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                        required
                    />



                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                {/* Google */}
                <button onClick={handleGoogle} className="btn bg-gray-200 text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
                <p>Already have an account? Please <Link className='text-blue-400 underline' to='/login'>Login</Link></p>
            </div>
        </div>

    );
};

export default Logout;