import React,{ useState,useEffect } from 'react';
import Header from "../AdminPanel/header";
import DisplayUser from '../AdminPanel/users';
import Footer from '../AdminPanel/footer';
import AdminHeader from '../AdminPanel/header';

function Displayusers() {
    const colors = {
        Sea: '#FFFFFF',
       
      }
      const [color, setColor] = useState(colors.Sea)
      useEffect(
        () => {
          document.body.style.background = color
        },
        [color]
      )     
    return(
         <>
            <AdminHeader />
            <DisplayUser />
          
        </>
    );
};

export default Displayusers;