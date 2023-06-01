import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'
function App() {
  
  const [datos, setDatos] = useState({
    nombre: '',
    bandaFavorita: '',
    año: 0
  })

  const [show, setShow] = useState(false)

  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if((datos.nombre.length > 3 
      && !datos.nombre.startsWith(' ') 
      && (datos.bandaFavorita.length > 6) 
      && (datos.año > 1920))){
      
      setShow(true)
      setError(false)
  
    } 

    if((datos.nombre.length < 3 
      || datos.nombre.startsWith(' ') 
      || (datos.bandaFavorita.length < 6) 
      || (datos.año < 1920))){
      
      setError(true)
  
    } 
  }



  return (
    <>
      <div className='form'>
        <Form datos={datos} setDatos={setDatos} handleSubmit={handleSubmit}/>

      </div>
      
        
      {show && <Card datos={datos}/>}
      {error && <p>Por favor, chequea que la información sea correcta</p>}
      
      
    </>
  )
}

export default App
