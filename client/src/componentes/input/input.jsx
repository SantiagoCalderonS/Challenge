import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dar_info, dar_permiso, conseguir_usuario } from "../../redux/actions"
import axios from "axios"
import style from "./input.module.css"

const Input = ({I}) => {
    
    const [info, setinfo] = useState({nombre: ""})
    const informacion = useSelector((state)=>state.info)
    const dispatch = useDispatch()
    const local = JSON.parse(localStorage.getItem("permiso"))

    const handler_info = (event) =>{
        switch(I.type){
            case "text": 
                dispatch( dar_info({
                    prop: "nombre",
                    value: event.target.value
                }))
                return;
            case "tel": 
                dispatch( dar_info({
                    prop: "celular",
                    value: event.target.value
                }))
                return;
            case "select": 
                dispatch( dar_info({
                    prop: "lenguaje",
                    value: event.target.value
                }))
                return;
            case "date": 
                dispatch( dar_info({
                    prop: "fecha",
                    value: event.target.value
                }))
                return;
            case "radio": 
            console.log(event.target.value)
                dispatch( dar_info({
                    prop: "informante",
                    value: event.target.value
                }))
                return;
            case "checkbox": 
                dispatch( dar_info({
                    prop: "confirmacion",
                    value: !info.confirmacion
                }))
                return;
                default: return
        }
    }

    useEffect(()=>{
        setinfo(informacion)
    }, [handler_info])

    const subir = async (event)=>{
        event.preventDefault()
        console.log(local)
        try {
            if(local.ID === ""){
                const {data} = await axios.post("http://localhost:3001/cliente", info)
            localStorage.setItem("permiso", JSON.stringify({permiso: data.permiso, ID: data.usuario.id}))
            dispatch(dar_permiso(data.permiso))
            data.mensaje === "Participante ya existente"? window.alert(data.mensaje):""
            console.log(data)
            dispatch(conseguir_usuario(data.usuario.id))
        }else{
            const {data} = await axios.put(`http://localhost:3001/cliente?id=${local.ID}`, info)
            localStorage.setItem("permiso", JSON.stringify({permiso: data.permiso, ID: local.ID}))
            //localStorage.setItem("permiso", JSON.stringify({permiso:false, ID:""}))
            dispatch(dar_permiso(data.permiso))
            dispatch(conseguir_usuario(local.ID))
        }
            

        } catch (error) {
            console.log("alto ahi pana")
        }
        
    }

if(I.type === "select"){
    return(
        <div className={style.div}>
        <label>{I.label} : </label>
        <select className={style.input} name={I.name} onChange={handler_info}>
        {I.options.map((O)=>{
            return(
                <option className={style.input} value={O.value}>{O.label}</option>
            )
        })}
        </select>
    </div>
    )

}else if(I.type === "radio"){
    return(
        <div>
             {I.options.map((O)=>{
            return(
            <div className={style.div}>
                <input className={style.input} type={I.type} name={I.name} value={O.value} onChange={handler_info}/>
                <label>{O.label} : </label>
                <br/>
            </div>
            )
        })}


        </div>
    )

}else if(I.type !== "submit"){
     return( 
        <div className={style.div}>
            <label>{I.label} : </label>
            <input className={style.input} type={I.type} label={I.label} name={I.name} required={I.required} onChange={handler_info}></input>
        </div>
    )

}else{
    return( <div className={style.div}>
        { info.nombre !== "" && info.celular !== null && info.date !== null && info.lenguaje !== "" && info.informante !== "" && info.confirmacion !== null ?
        (<div>
            <label>{I.label} : </label>
            <input className={style.input} type={I.type} label={I.label} name={I.name} required={I.required} onClick={subir}></input>
        </div>) : ""}
        </div>
    )
}
    
}

export default Input; 