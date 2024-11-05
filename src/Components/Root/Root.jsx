import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <>
         <div className="max-w-6xl mx-auto ">
            <NavBar></NavBar>
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
        </>
    );
};

export default Root;