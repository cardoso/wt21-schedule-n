import {React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';

function SignUp() {
    const eye = <FaEye />
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
      <div>
    <h1>Sign Up</h1>
    <div className="signUpForm">
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>FULL NAME</label>
      <input type="text" placeholder="Enter your full name" size="60" {...register("name", {required: true, min: 3, maxLength: 40})} />
      <label>E-MAIL</label>
      <input type="text" placeholder="Name@email.com" size="60" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <label>PASSWORD</label>
      <input type="password" placeholder="Create password" type={passwordShown ? "text" : "password"} size="60" {...register("password", {required: true, min: 8, maxLength: 72})} />
      <i onClick={togglePasswordVisiblity}>{eye}</i>
      <p>Between 8 and 72 Characters</p>
      <div><button type="submit" className="accountButton">Sign up for free</button></div>
    </form>
    </div>
    <div className="signUpConnect">
    <div className="hrSec"><hr class="left"/>Or<hr class="right" /></div>
    <div><button type="submit" className="externalButton">Continue with Google</button></div>
    <div><button type="submit" className="externalButton">Continue with Facebook</button></div>
    <div><p>Already have an account? Log in</p></div>
    </div>
    </div>
    )
}

export default SignUp;