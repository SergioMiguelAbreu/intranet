import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contatos from './pages/Contatos';


function RoutesApp() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/pages/Contatos' element={ <Contatos/> }></Route>
            </Routes>
        </BrowserRouter>
     );
}

export default RoutesApp;