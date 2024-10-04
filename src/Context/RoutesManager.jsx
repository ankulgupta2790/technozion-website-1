import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from '../components/About';
import  { Events }  from '../components/Events';
import AuthPage from '../components/Authpage/AuthPage';
import Home from '../components/Home';
import Sponsors from '../components/Sponsors/Sponsors';
import { useAuth } from './AuthManager';
import { Register } from '../components/Register';
import { useLocation } from 'react-router-dom';

const RoutesManager = () => {
	const { user } = useAuth();
	const location = useLocation();
	window.scroll(0,0);
	return (
		<Routes>
			{!user ? (
				<>
					{/* <Route path="/auth" element={<AuthPage />} /> */}
					{/* <Route path="/register" element={<AuthPage />} /> */}
				</>
			) : (
				<>
					{/* <Route path="/auth" element={<Register />} /> */}
					{/* <Route path="/register" element={<Register />} /> */}
				</>
			)}

			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			{/* <Route path="/sponsors" element={<Sponsors />} /> */}
			<Route path="/events" element={<Events />} />
		</Routes>
	);
};
export default RoutesManager;
