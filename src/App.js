
import Home from './componentes/home/home.js'
import MainMenu from './componentes/mainMenu.jsx'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css';

import { Provider } from 'react-redux'
import {store }from './redux/store.jsx'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       <Routes>
          
          <Route path="/Menu" element={<MainMenu/>} />
          <Route exact path="/" element={<Home/>} />
       </Routes>
        
      </BrowserRouter>

    </Provider>
      
    

     
  
  );
}

export default App;
