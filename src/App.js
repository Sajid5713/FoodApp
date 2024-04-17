import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

const AppLayout = () => {

    return(
        <>
        <StrictMode>
            <Header/>
            <Body/>
            <Footer/>
        </StrictMode>
      
        </>
      
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);


