import { useEffect, useState } from 'react';
import './App.css';
import Conversor from './Conversor';

function Usuarios({recargar}) {

  const [usuarios, setUsuarios] = useState([]);

  async function obtenerUsuarios() {
    const peticion = await fetch("https://loginexpress-production-caf7.up.railway.app/usuarios", { credentials: "include" });
    if (peticion.ok) {
      const respuesta = await peticion.json()
      setUsuarios(respuesta)
    }
  }

  async function eliminarUsuario(id) {
    const peticion = await fetch("https://loginexpress-production-caf7.up.railway.app/usuarios?id=" + id, { credentials: "include", method: 'DELETE' });
    if (peticion.ok) {
      alert('Usuario eliminado')
      obtenerUsuarios();
    }
  }

  useEffect(() => {
    obtenerUsuarios()
  }, [recargar])

  return (
    <>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Usuario</th>
              <th>Clave</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.usuario}</td>
                  <td>{usuario.clave}</td>
                  <td>
                    <button onClick={() => { eliminarUsuario(usuario.id) }}>X</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

    </>
  );
}

export default Usuarios;
