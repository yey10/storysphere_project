import { useForm } from 'react-hook-form';
import axios from '../bootstrap.js';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Importa el archivo CSS

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
           //Crear una instancia de FormData para manejar el envio de archivos
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('password', data.password);
            formData.append('biography', data.biography);


            //verificar si la imagen está presente para añadirla al formData
            if (data.profile_photo && data.profile_photo[0]) {
                console.log(data.profile_photo[0]); // Verifica si es un archivo válido
                const file = data.profile_photo[0];
                formData.append('profile_photo', file, file.name);
            }

            const response = await axios.post('/register', formData);

            console.log(response.data);
            alert(response.data.message);
            navigate('/login');

        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data.message || 'Error en el registro'); 

            if (error.response.data.errors) {
                Object.values(error.response.data.errors).forEach(err => {
                    alert(err.join(', ')); // Muestra todos los mensajes de error
                });
            }
        }
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit(onSubmit)} >
                <input type="text" {...register('name', { required: true })} placeholder='Nombre completo' />
                {errors.name && <div className="error">Nombre es requerido</div>}
                <input type="text" {...register('email', { required: true })} placeholder='Email' />
                {errors.email && <div className="error">Email es requerido</div>}
                <input type="password" {...register('password', { required: true })} placeholder='Password' />
                {errors.password && <div className="error">Password es requerido</div>}
                <textarea {...register('biography', { required: true })} placeholder='Biografía'></textarea>
                {errors.biography && <div className="error">Biografía es requerida</div>}
                <input type="file" {...register('profile_photo')} accept="image/*"  />
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default Register;
