
const Input = ({I}) => {
    console.log(I)

if(I.type === "select"){
    return(
        <div style={{"margin-top": "10px", "width": "100%" }}>
        <label>{I.label}</label>
        <select name={I.name}>
        {I.options.map((O)=>{
            return(
                <option value={O.value}>{O.label}</option>
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
            <div>
                <input type={I.type} name={I.name} value={O.value}/>
                <label>{O.label}</label>
                <br/>
            </div>
            )
        })}


        </div>
    )

}else{
    
    return( 
        <div style={{"margin-top": "10px", "width": "100%" }}>
            <label>{I.label}</label>
            <input type={I.type} label={I.label} name={I.name} required={I.required} ></input>
        </div>
    )
}
    
}

export default Input; 