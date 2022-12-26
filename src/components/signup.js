import img2 from '../Images/signup.svg';
import { useForm } from 'react-hook-form';
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router";
import axios from 'axios'
import { useState } from 'react';
function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const onClicked=()=>{
        navigate('/login');
    }

    const myStyles = {
        cursor: 'pointer'
        }
        const onFormSubmit=(userObj)=>{
            console.log(userObj);
            axios.post('http://localhost:4000/user-api/create-user',userObj)
            .then(response=>{
                console.log(response)
                alert(response.data.message)
                if(response.data.message==="User Created successfully..."){
                    navigate("/login")
                }
            })
            .catch(error=>{
                console.log(error)
                alert(`error occured ${error}`)
            })
        }   
    return (
        <>
            <div className='row'>
                <div  className='col-6 text-center pt-5'>
                <img src={img2} className="w-75" />
                </div>
                <div className='col-6'>
                    <form className="mx-auto mt-5 container  p-3 w-75" onSubmit={handleSubmit(onFormSubmit)}>
                        <h2>Welcome</h2>
                        <br />
                        <h2>Sign Up</h2><p>lorem ipsum is simple</p><br />
                        <div className="mb-2">
                            <label htmlFor="username" className="form-label">UserName</label>
                            <input type="text" className='form-control' {...register("username", { required: true })} />
                            {errors.username?.type === "required" && <p className='text-danger'>*Username is Required</p>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" id="email" className="form-control" {...register("email", { required: true })} />
                            {errors.email?.type === "required" && <p className='text-danger'>*Email is Required</p>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" {...register("password", { required: true })} />
                            {errors.password?.type === "required" && <p className='text-danger'>*Password is Required</p>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" {...register("password2", { required: true })} />
                            {errors.password?.type === "required" && <p className='text-danger'>*Password is Required</p>}
                        </div>
                        <button type="submit" className="btn btn-dark w-100">Register </button><br />
                        <p className='text-center' style={myStyles}>Already have an Account ?<b onClick={onClicked}>Login</b></p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignUp;