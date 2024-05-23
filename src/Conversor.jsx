import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Conversor() {
  const [textoAVoz, setTextoAVoz] = useState("")
  const [vozATexto, setVozATexto] = useState("")

  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value)
  }

  function convertirTextoAVoz() {
    const utterance = new SpeechSynthesisUtterance(textoAVoz)
    speechSynthesis.speak(utterance)
  }
  function resultado(event) {
    setVozATexto(event.results[0][0].transcript)
  }
  function grabarVozATexto() {
    const recognition = new webkitSpeechRecognition()
    recognition.lang = "es-ES"
    recognition.start()
    recognition.onresult = resultado
  }
  if (logueado) {
    return (
      <>
        <br />
        <h3>Convertidor de texto a voz</h3>
        <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiarTexto} />
        <button onClick={convertirTextoAVoz}>Convertir</button>

        <h3>Convertidor de voz a texto</h3>
        <button onClick={grabarVozATexto}>Grabar</button>
        <p>{vozATexto}</p>
      </>
    );
  }

  return (

    <>
      <input type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
      <input type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
      <button onClick={ingresar}>Ingresar</button>
    </>
  )
}

export default conversor
