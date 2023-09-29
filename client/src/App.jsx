import { useEffect, useState } from 'react'
import style from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import Barra from './componentes/barra/barra';
import Inicio from './componentes/inicio/inicio';
import Listado from './componentes/listado_participantes/listado';
import axios from 'axios';
import { useDispatch, useSelector} from "react-redux";
import { inputs, dar_permiso } from './redux/actions';


function App() {

  const dispatch = useDispatch()
  const [errorEXE, setError]= useState(false)

  const obtener_json = async () =>{
    try {
      const {data} = await axios.get("http://localhost:3001/")

      dispatch(inputs(data))


    } catch (error) {
      setError(!errorEXE)
    }
    
  }

  useEffect(()=>{
    obtener_json()
    const local = JSON.parse(localStorage.getItem("permiso"))
    if(!local.ID){
      localStorage.setItem("permiso", JSON.stringify({permiso: false, ID: ""}))
      dispatch(dar_permiso(false))
    }else{
      dispatch(dar_permiso(JSON.parse(localStorage.getItem("permiso")).permiso))
    }
  
  }, [])

  if(!errorEXE){
    return(
    <div className={style.container}>
    <Barra/>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/listado' element={<Listado/>}/>
    </Routes>
    </div>
  )}else{
    return(
  <h1>
    FUERA DE SERVICIO
  </h1>
  )}
}

export default App
