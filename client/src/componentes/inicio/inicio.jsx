import axios from "axios"
import { useState , useEffect} from "react";
import { useSelector } from "react-redux";
import Input from "../input/input"; 

const Inicio = () => {
    const [acceso, setAcceso] = useState(false) ;
    const inputs = useSelector((state)=> state.inputs)
    const permiso = useSelector((state)=> state.permiso_redux)
    const info = useSelector((state)=> state.info)

    function dar_acceso () {
        console.log(permiso)
        setAcceso(permiso)
        console.log("AAAAAAAAAAAAAA")
    }

    useEffect(()=>{
       dar_acceso()
        
    },[permiso])

console.log(info)
    return(
        <div>
            { !acceso? (
                <div>
                    <form>
                    {inputs?.items?.map((I)=>{
                        return(
                            <Input I={I}/>
                        )
                    })}
                    </form>
            </div>
            )
            : (<h1>dssvdd</h1>) }
    
        </div>
    )
}

export default Inicio; 