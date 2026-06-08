import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosConfig from '../api/axiosConfig'
const { db } = axiosConfig;

function LoginPage() {
    const [dni, setDni] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const { data } = await db.post('/auth/login', { dni });
            console.log('Login exitoso:', data);
            navigate('/dashboard'); // redirige al dashboard
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div>
            <h1>Iniciar Sesion</h1>
            <input
                placeholder="DNI"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
            />
            <button onClick={handleLogin}>Ingresar</button>
        </div>
    )
}

export default LoginPage