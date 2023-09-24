import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/FixedComponents/Header/Navbar";
import Banner from "../Components/FixedComponents/Header/banner";
import { useEffect } from "react";


const MainLayout = () => {

    const loc = useLocation();

    useEffect(()=>{

        if(loc.pathname === '/'){
            document.title = `phone - home`;
        }else{
            document.title = `phone ${loc.pathname.replace('/','- ')}`;
        }

        if(loc.state){
            document.title = `phone - ${loc.state}`;
        }

    },[loc.pathname ,  loc.state])


    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main className="max-w-screen-xl mx-auto my-10">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;