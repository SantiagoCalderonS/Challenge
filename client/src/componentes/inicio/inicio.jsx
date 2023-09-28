import axios from "axios"
import { useState , useEffect} from "react";
import { useSelector } from "react-redux";
import Input from "../input/input"; 

const Inicio = () => {
    const [acceso, setAcceso] = useState(true) ;
    const inputs = useSelector((state)=> state.inputs)

    async function dar_acceso () {
         const Acc = await JSON.parse(localStorage.getItem("permiso"))
        setAcceso(Acc)
        console.log(Acc.ID)
    }

    useEffect(()=>{
       dar_acceso()
        
    },[])
console.log(inputs)
    return(
        <div>
            { acceso? (
                <div>
                    {inputs?.items?.map((I)=>{
                        return(
                            <Input I={I}/>
                        )
                    })}
            </div>
            )
            : (<h1>dssvdd</h1>) }
        </div>
    )
}

export default Inicio; 