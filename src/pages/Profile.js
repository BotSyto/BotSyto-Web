import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faBook,
	faHome,
	faHeart,
	faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";

function Profile() {
	const { username } = useParams();
	return (
		<div className="perfil">
			{/* <h1> ProfilePage: {username}</h1> */}
			<div id="contenedor">
				<div id="info">
					<div className="icono">
						<FontAwesomeIcon icon={faUser} />
					</div>
					<div>
						<h2>Laura Santos Balladares</h2>
						<h2>Phd Ciencias de la Computación</h2>
						<p>
							Profesora de psicología y directora de
							<br />
							Silliman Residential College en la
							<br />
							Universidad de Yale. A.B. en Psicología y<br />
							Biología de la Universidad de Harvard en
							<br />
							1997 y su Ph.D. en Psicología de Harvard
							<br />
							en 2003.
						</p>
					</div>
				</div>

				<div className="datosPersonales">
					<h1>Información General</h1>
					<h2>Nombres: </h2>
					<h2>Apellidos: </h2>
					<h2>Celular: </h2>
					<h2>Email: </h2>
					{/* <h2>ESTUDIOS: </h2>
                <h2>HORARIO DE ATENCIÓN: </h2> */}
				</div>
			</div>
			<div id="conten-estadisticas">
				<div className="estadisticas">
					<h1>Estadísticas</h1>
					<h2>Cantidad de tutoriales registrados: </h2>
					<h2>Cantidad de tutoriales completados: </h2>
					<h2>Porcentaje de rendimiento: </h2>
					<h2>Cantidad total de me gusta: </h2>
					<h2>Puntaje total:</h2>
					<h2>Promedio de notas:</h2>
					<h2>Reuniones: </h2>
					{/* <h1>ESTADISTICAS</h1>
                <h2>CANTIDAD DE TUTORIALES SUBIDOS:</h2>
                <h2>CANTIDAD TOTAL DE REGISTROS: </h2>
                <h2>CANTIDAD DE REGISTROS POR TUTORIAL: </h2>
                <h2>CANTIDAD TOTAL DE ME GUSTA: </h2>
                <h2>CANTIDAD DE ME GUSTA POR TUTORIAL:</h2>
                <h2>REUNIONES: </h2> */}
				</div>
			</div>
		</div>
	);
}

export default Profile;
