import { useForm } from "react-hook-form";
import axios from '../bootstrap.js';
import { useNavigate } from 'react-router-dom';
import './Register.css';




const Login = () => {

  const  { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const  onSubmit = async (data) => {
    try {
      
      const response = await axios.post('/login', {
        email : data.email,
        password : data.password,
      });

      //guardar el token en el local storage

      localStorage.setItem('token', response.data.token);
      alert(response.data.message);
      navigate('/');



    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data.message || 'Error en el inicio de sesión');

      if (error.response.data.errors) {
          Object.values(error.response.data.errors).forEach(err => {
              alert(err.join(', ')); // Muestra todos los mensajes de error
          });
      }
  }
  }











  return (
    <div className="container">

      <form onSubmit={handleSubmit(onSubmit)} className="">

        <input type="text" {...register('email', {required : true})} placeholder="email"/>
        {errors.email && <div className="error">Email es requerido</div>}
        <input type="password" {...register('password', {required : true})} placeholder="password"/>
        {errors.password &&  <div className="error">Password es requerido</div>}
        <button type="submit">Iniciar Sesión</button>

      </form>
      
    </div>
  )
}

export default Login
