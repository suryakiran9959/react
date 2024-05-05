const One=(props)=>{
    return(
        <>
        <h1>Hello{props.name}</h1>
        </>
    )
}

const Greetings=()=>{
    return(
        <>
        <One name="SURYA"/>
        </>
    )
}
export default Greetings