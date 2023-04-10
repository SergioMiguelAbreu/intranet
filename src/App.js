import React, {useState} from 'react';
import Navbar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/index.css';
import Home from './pages/Home';
import Contatos from './pages/Contatos';
import Login from './pages/Login/Login';
import Top from './components/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
	const [navVisible, showNavbar] = useState(false);

	return (
		<>
		
		<BrowserRouter >
			<div className="App">
				<ToastContainer />	
				<Top/>
				<Navbar visible={ navVisible } show={ showNavbar } />
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/pages/Contatos" element={<Contatos/>} />
					<Route path="/pages/Login/Login" element={<Login/>} />
				</Routes>
			</div>
		</BrowserRouter>
		</>
  );
}

export default App;
