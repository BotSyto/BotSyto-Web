import React from 'react';
import {useParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser, faBook, faHome, faHeart, faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

function Profile() {
    const {username} = useParams();
    return (
        <div className='perfil'>
            {/* <h1> ProfilePage: {username}</h1> */}
            
            <div className="icono">
                <FontAwesomeIcon icon={faUser}/>
            </div>

            <div className="datosPersonales">
                <h2>NOMBRES: </h2>
                <h2>CELULAR: </h2>
                <h2>EMAIL: </h2>
                {/* <h2>ESTUDIOS: </h2>
                <h2>HORARIO DE ATENCIÓN: </h2> */}
            </div>

            <div className="estadisticas">
                <h1>ESTADISTICAS</h1>
                <h2>CANTIDAD DE TUTORIALES REGISTRADOS: </h2>
                <h2>CANTIDAD DE TUTORIALES COMPLETADOS: </h2>
                <h2>PORCENTAJE DE RENDIMIENTO: </h2>
                <h2>CANTIDAD TOTAL DE ME GUSTA: </h2>
                <h2>PUNTAJE TOTAL:</h2>
                <h2>PROMEDIO DE NOTAS:</h2>
                <h2>REUNIONES: </h2>
                {/* <h1>ESTADISTICAS</h1>
                <h2>CANTIDAD DE TUTORIALES SUBIDOS:</h2>
                <h2>CANTIDAD TOTAL DE REGISTROS: </h2>
                <h2>CANTIDAD DE REGISTROS POR TUTORIAL: </h2>
                <h2>CANTIDAD TOTAL DE ME GUSTA: </h2>
                <h2>CANTIDAD DE ME GUSTA POR TUTORIAL:</h2>
                <h2>REUNIONES: </h2> */}
            </div>

        </div>
    )
}

export default Profile;