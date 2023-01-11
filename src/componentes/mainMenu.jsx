
import { connect } from 'react-redux'
import './mainMenu.css'
import Tarjeta from './tarjeta/tarjeta.jsx'




  function MainMenu(props){
    return(
      <div>
        <h1> La Dogeria Arma tu Pedido</h1>
        <div className='main-container'>
          
            <div className='grid-container'>
            {platillos.map((plato)=>{
                return(
                <Tarjeta {...plato}
                />)
            })}
    
            </div>

         <div className='carrito'>
            
              <div>{props.sState} aqui va ir el carrito, pero no puedo mapear el state
              </div>
                
              
              
         </div>
           
        </div>
        </div>
    )
}



   const platillos = [
    {
      nombre: 'Hotdog Clásico',
      descripcion: 'Con mostaza, ketchup y relish de pepinillo.',
      imagen: "img22.png"
    },
    {
      nombre: 'Hotdog con Tocino y Queso',
      descripcion: 'Con tocino ahumado, queso derretido y salsa BBQ.',
      imagen: "img22.png"
    },
    {
      nombre: 'Hotdog Chicago',
      descripcion: 'Con tomate, pepinillos en rodajas, cebolla en rodajas, relish de pepinillo, mostaza y sal de ajo.',
      imagen: "img22.png"
    },
    {
      nombre: 'Hotdog con Todos los Toppings',
      descripcion: 'Con todos los toppings disponibles: tomate, pepinillos en rodajas, cebolla en rodajas, relish de pepinillo, mostaza, ketchup, sal de ajo y queso rallado.',
      imagen: "img22.png"
    },
    {
      nombre: 'Hotdog con Chili y Queso',
      descripcion: 'Con chili y queso rallado encima.',
      imagen: "img22.png"
    },
    {
      nombre: 'Hotdog con Salsa de Ajo',
      descripcion: 'Con salsa de ajo y queso rallado encima.',
      imagen: "img22.png"
    },
    {
      nombre: 'Hotdog con Salsa de Frijoles',
      descripcion: 'Con salsa de frijoles y queso rallado encima.',
      imagen: "img22.png"
    },
    {
      nombre: 'Hotdog con Queso y Cebolla Frita',
      descripcion: 'Con queso rallado y cebolla frita encima.',
      imagen: "img22.png"
    }
  ];
 

  function mapDispatchToProps(dispatch) {
    return {
      cambiar: () => dispatch(action1()),
      cambiar2: () => dispatch(action2()),
    };
  }

  function mapStateToProps(state){
    return{
    sState: state.prueba
   };
  }

    const  action1=(payload)=>{
      return{
       type:'action1',
       payload
      }
       }
    const  action2=()=>{
        return{
         type:'action2'
        }
         }

 export default connect(mapStateToProps,mapDispatchToProps)(MainMenu);