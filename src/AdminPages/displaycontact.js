import React,{ useState,useEffect } from 'react';
import DisplayContact from '../AdminPanel/contact';
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
            <DisplayContact />
          
        </>
    );
};

export default Displayusers;