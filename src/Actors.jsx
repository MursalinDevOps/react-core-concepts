export default function Actors({name}){
    const actorsStyle = {
        textAlign:'start',
        backgroundColor:'black',
        margin:'15px',
        borderRadius:'5px',
        padding:'10px'
    } 
    return (
        <li style={actorsStyle}>Actor: {name}</li>
    )
}