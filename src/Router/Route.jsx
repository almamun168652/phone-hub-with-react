import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Fevorites from "../Pages/Fevorites/Fevorites";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DetailsPhone from "../Pages/DetailsPhone/DetailsPhone";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/phones.json')
            },
            {
                path: '/fevorites',
                element: <Fevorites></Fevorites>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/phone/:id',
                element: <DetailsPhone></DetailsPhone>,
                loader: ()=> fetch('/phones.json')
            }
        ]
    }
])

export default myCreatedRoute;