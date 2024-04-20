import Spinner from 'react-bootstrap/Spinner';

function GrowExample() {
  return(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div>
    <Spinner animation="grow" style={{height:"500px",width:"500px",color:"blue"}}/>;
    </div>
    </div>
  )
}

export default GrowExample;