import React from "react";
import "./EditarTuto.css";
import { Link } from 'react-router-dom';

function CrearTutos() {

	async function postData(url = "", data) {
        console.log(JSON.stringify(data));
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }

function subirTuto(){
    var urlBd = "http://localhost:5000"
        const namet = document.getElementById("titleText").value;
        const desct = document.getElementById("descripcionText").value;
        let newT = {
            name: namet, description: desct,
		}
        console.log(typeof(em));
        postData(urlBd + '/tutorial/subirTuto', newT)
            .then(data => {
                if (data.status == "SUCCESS") {
                    
                }
                else {
                    alert(data.message);
                }
            }).catch(err => console.log(err));


}

	return (
		<div className="crearTutos">
			
			<div class="form-group">
				<label for="titleText">Titulo</label>
				<input class="form-control" style={{margin: "0px"}} id="titleText" placeholder="Titulo del Tutorial"/>
			</div>
			
			<div class="form-group">
				<label for="descripcionText">Descripción</label>
				<textarea class="form-control" id="descripcionText" rows="3"></textarea>
			</div>
		

			<div class="form-group mt-4">
				<h1>Visibilidad</h1>
				<select class="form-select" aria-label="Default select example">
					<option value="Privado" selected>Privado</option>
					<option value="Publico">Publico</option>
				</select>
			</div>
			
			<div className="text-center mt-4">
				<Link to={"/tutoscreados"}>
				<button className="btn btn-primary">Guardar</button>
				</Link>
			</div>
		</div>
	);
}

export default CrearTutos;
