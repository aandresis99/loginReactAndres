import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './Conversor'

function App() {
  const [usuario, setUsuario] = useState("")
  const [clave, setClave] = useState("")
  const [logueado, SetLogueado] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  async function ingresar() {
    const peticion = await fetch('http://localhost:3011/login?usuario=' + usuario + '&clave=' + clave, { credentials: 'include' })
    if (peticion.ok) {
      SetLogueado(true)
    } else {
      alert("usuario y/o clave incorrecto")
    }


    // if (usuario == "admin" && clave == "admin") {
    //   alert("Ingresaste")
    //   SetLogueado(true)
    // } else {
    //   alert("usuario y/o clave incorrecto")
    // }
  }

  async function validar() {
    const peticion = await fetch("http://localhost:3011/validar", { credentials: "include" })
    if (peticion.ok) {
      SetLogueado(true)
    }
  }

  useEffect(() => {
    validar()
  }, [])

  if (logueado) {
    return <Conversor />
  }

  return (

    <>
      <h1>Inicio de sesión</h1>
      <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
      <input placeholder='Contraseña' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
      <button onClick={ingresar}>Ingresar</button>
    </>
  )
}

export default App
