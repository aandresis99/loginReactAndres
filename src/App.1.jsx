import { useState } from 'react';

export function App() {
    const [usuario, setUsuario] = useState("");

    function cambiarUsuario(evento) {
        setUsuario(evento.target.value);
    }

    function cambiarClave(evento) {
        setClave(evento.target.value);
    }

    return (
        <>
            <input type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
            <input type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
            <button>Ingresar</button>
        </>
    );
}
