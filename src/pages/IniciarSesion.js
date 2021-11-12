import React from 'react'

export default function IniciarSesion() {
    return (
        <div style={{marginLeft:"400px", marginTop:"200px", width:"40rem"}}>
            <h1>Iniciar Sesion</h1>
            <input type="email" className="form-control mb-2 mt-4" placeholder="Email:" />
            <input type="password" className="form-control" placeholder="Password:" />
        </div>
    )
}
