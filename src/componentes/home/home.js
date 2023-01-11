
import {Link } from 'react-router-dom'


import './home.css'


export default function Home(){
    return(
   <div classname='fondo'>
    <div className="cardd">
      
      <h1 className="card-title">La Dogería</h1>
      
      

      <nav>
       <Link to="Menu"

       > Ordena YA!!</Link>

      </nav>
      

    </div>


   </div>

    
    )
} 