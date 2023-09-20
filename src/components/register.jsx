import {icon} from '../constans'
import {Input} from '../ui'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUserStart, registerUserStart} from "../slice/auth";
const Register = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.auth)

    const loginHandler = e =>{
        e.preventDefault()
        dispatch(registerUserStart())
    }
    return (
        <div className='text-center'>
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-5" src={icon} alt="" width="72" height="60"/>
                        <h1 className="h3 mb-3 fw-normal">Please register</h1>

                        <Input label={'Username'} state={name} setState={setName}/>
                        <Input label={'Email address'} state={email} setState={setEmail}/>
                        <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>

                    <button className="w-100 btn btn-lg btn-primary mt-2" disabled={isLoading} onClick={loginHandler} type="submit">
                        {isLoading ? "loading..." : 'Register'}
                    </button>
                </form>
            </main>
        </div>
    )
}
export default Register