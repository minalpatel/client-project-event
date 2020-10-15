import React,{ useState,useEffect } from 'react';
import DisplayCom from '../AdminPanel/company';
import Footer from '../AdminPanel/footer';
import AdminHeader from '../AdminPanel/header';

function DisplayCompany() {
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
            <DisplayCom />
          
        </>
    );
};

export default DisplayCompany;