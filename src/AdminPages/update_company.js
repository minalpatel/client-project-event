import React,{ useState,useEffect } from 'react';
import Header from "../AdminPanel/header";
import UpdateCompany from '../AdminPanel/updatecompany';
import Footer from '../AdminPanel/footer';
import AdminHeader from '../AdminPanel/header';

function Update_Company() {
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
            <UpdateCompany />
          
        </>
    );
};

export default Update_Company;