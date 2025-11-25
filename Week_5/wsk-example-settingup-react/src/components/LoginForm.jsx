import useForm from "../hooks/formHooks";
import { useAuthentication } from "../hooks/apiHooks";



const LoginForm = () => {


    const { postLogin } = useAuthentication();


    const initValues = {
    username: '',
    password: '',
    };
    
    const doLogin = async () => {
        //console.log(inputs);
        // TODO: add login functionalities here
        try{
            const result = await postLogin(inputs);
            console.log(result);

            localStorage.setItem('token', result.token);
            window.location.href = '/';
        }
        catch(error){
            console.log("Error in doLogin", error.message);
        }
    };
    
    const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, initValues);
    
    console.log(inputs);

    return (
        <>
        <form onSubmit={ handleSubmit }>
        <div>
            <label htmlFor="loginuser">Username</label>
            <input
                name='username'
                type="text"
                id="loginuser"
                onChange={ handleInputChange }
                autoComplete="username"  
                value={inputs.username}          
            />
        </div>
        <div>
            <label htmlFor="loginpassword">Password</label>
            <input
                name="password"
                type="password"
                id="loginpassword"
                onChange={ handleInputChange }
                autoComplete="current-password"
                value={inputs.password}

            />
        </div>
        <button type="submit">Login</button>  
        </form>      
        </>
    );
};

export default LoginForm;