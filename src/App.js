import React, { useEffect, useState } from 'react';
import './App.css';
import  {Loader} from './components/Loader'; // Import the Loader component
import Navbar from './components/Navbar';
import AuthProvider from './Context/AuthManager';
import RoutesManager from './Context/RoutesManager';
import Footer from './components/Footer/footer';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false); // Control for fade-out effect

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true); 
        }, 3000); 

        const removeLoader = setTimeout(() => {
            setLoading(false); 
        }, 3500); 

        return () => {
            clearTimeout(timer);
            clearTimeout(removeLoader);
        };
    }, []);

    return (
        <>
            {loading ? (
                <div className={`loader ${fadeOut ? 'fade-out' : ''}`}>
                    <Loader />
                </div>
            ) : (
                <AuthProvider>
                    <Navbar />
                    <RoutesManager />
                    {/* <Footer /> */}
                </AuthProvider>
            )}
        </>
    );
};

export default App;
