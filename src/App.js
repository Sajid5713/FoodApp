import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import { createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom';

const AppLayout = () => {

    
    return(
        <>
        <StrictMode>
            <Header/>
            <Outlet/>
            <Footer/>
        </StrictMode>
      
        </>
      
    )
}

const router = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[              
            {
                path:'/',
                element:<Body/>,
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
        ],
        errorElement:<Error/>              
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);


