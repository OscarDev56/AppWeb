import './tarjeta.css'
export default function Tarjeta(props){

    
    
    const { nombre, descripcion, imagen } = props;
    
    
    return(
        <div className='card' >
        
            <img className='card-image' src={require(`./imagenes/${imagen}`)} alt='no se puede mostrar'></img>
            <h1 className='card-name'>{nombre}</h1>
            <text className='card-description'>{descripcion}</text>

        </div>
    )
}