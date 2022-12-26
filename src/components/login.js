import img1 from '../Images/signin.svg';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import {userLogin} from '../slices/Userslice';
import Loader from './loader/Loader';
function Login(){
    let {userObj,isPending,isFulfilled,isRejected,errMsg}=useSelector((state)=>state.userData)
    const {register,handleSubmit,formState:{errors}}=useForm();
    let dispatch=useDispatch()
    let navigate=useNavigate()
    const onClicked=()=>{
        navigate('/signup');
    }
    const onClicked2=()=>{
        navigate('/Forgotpass');
    }
    const myStyles = {
        cursor: 'pointer'
        }
    const onFormSubmit=(loginData)=>{
        dispatch(userLogin(loginData))
    }
    useEffect(() => {
        if (isFulfilled) {
          navigate("/userdashboard");
        }
      }, [isFulfilled, isRejected]);
    return(
        <>
        {isPending===true && <Loader/>}
        <div className='m-5 row'>
        <img width="150px" src={img1} className='col-sm-6 col-lg-5' />
            <div className='col-sm-5 col-lg-4 mx-auto m-5'>
            <h5>Welcome !</h5><br></br>
                <h1>Sign in</h1>
                <hr />
                <form onSubmit={handleSubmit(onFormSubmit)}>

                    <div className='mb-3'>
                        <label htmlFor="username" className='form-label'>Username</label>
                        <input type="text" className='form-control' {...register("username",{required:true})} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" className='form-control' {...register("password",{required:true})} />
                    </div><div>
                    <label>
                      <input type="checkbox" />Remembered Me</label>
                      <label className='float-end' onClick={onClicked2} style={myStyles}>Forgot Password?</label>
                  </div><br></br>
                    <div className='mb-3'>
                        <button type="submit" className='btn btn-dark  w-100'>Login</button>
                    </div>
                    <p className='text-center'>Don't have an Account ?<b onClick={onClicked} style={myStyles}>Register</b></p>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login;