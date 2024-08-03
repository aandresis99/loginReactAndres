import { useEffect, useState } from 'react';
import './App.css';


function Registro({recargarAhora}) {
  const [usuarioRegistro, setUsuarioRegistro] = useState("");
  const [claveRegistro, setClaveRegistro] = useState("");

  function cambiarUsuarioRegistro(evento) {
    setUsuarioRegistro(evento.target.value);
  }

  function cambiarClaveRegistro(evento) {
    setClaveRegistro(evento.target.value);
  }

  async function registrar() {
    const peticion = await fetch('http://localhost:3011/registro?usuario=' + usuarioRegistro + '&clave=' + claveRegistro, { credentials: 'include' });
    if (peticion.ok) {
      alert("Usuario Registrado");
      recargarAhora()
    } else {
      alert("Usuario no Registrado");
    }
  }

  useEffect(() => {
  }, [])

  return (
    <>
        <h1>Registro</h1>
        <input placeholder='Usuario' type="text" name="usuarioRegistro" id="usuarioRegistro" value={usuarioRegistro} onChange={cambiarUsuarioRegistro} />
        <input placeholder='Contraseña' type="password" name="claveRegistro" id="claveRegistro" value={claveRegistro} onChange={cambiarClaveRegistro} />
        <button onClick={registrar}>Registrar</button>


    </>
  );
}

export default Registro;
