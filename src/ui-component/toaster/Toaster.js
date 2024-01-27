import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = () => {
    return <ToastContainer autoClose={10000} />;
}

export default Toaster;